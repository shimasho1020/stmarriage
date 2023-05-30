import { getStorage, ref as REF, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs, doc, setDoc, updateDoc, arrayUnion, arrayRemove, runTransaction, getDoc, query, where, orderBy } from "firebase/firestore"
import { firestore, storage } from '~/plugins/firebase.js'
import { Interviewer, DisplayInterviewer } from '~/types/index'

export const getInterviewers = async() => {
  const q = query(collection(firestore, "interviewer"), orderBy("order", "asc"))
  const querySnapshot = await getDocs(q)
  const interviewers: DisplayInterviewer[] = querySnapshot.docs.map((doc) => {
  return {
      id: doc.id,
      ...doc.data() as Interviewer
    }
  }).filter(val => {
    return val.isPublic && val.caseList.isInterview
  })

  return interviewers 
}

export const getInterviewerCaseList = async() => {
  const q = query(collection(firestore, "interviewer"), orderBy("order", "asc"))
  const querySnapshot = await getDocs(q)
  const results = await Promise.all(
    querySnapshot.docs.map(async(doc) => {
      const url = await getDownloadURL(REF(storage, `images/${doc.id}`))
      .catch((error) => {
        console.log(error)
      })
      return {
        id: doc.id,
        url: !!url ? url : '',
        ...doc.data() as Interviewer
      }
    })
  )

  return results
}

export const getIndividualData = async(id: string) => {
  const docRef = doc(firestore, "interviewer", id)
  const docSnap = await getDoc(docRef)
  if (!docSnap.exists()) {
    throw new Error("No such document!")
  }
  const interviewer = docSnap.data() as Interviewer

  const URL = await getDownloadURL(REF(storage, `images/${id}`))
  .catch((error) => {
    console.log(error)
  })
  const imageURL = !!URL ? URL : ''

  return { interviewer, imageURL }
}

export const editCaseOrder = async(id: string = 'AWSzvmqolFwuBmHFtDIM', order: number) => {
  const exampleRef = doc(firestore, "interviewer", id)
  await setDoc(exampleRef, {order}, { merge: true })
  .catch((e) => {
    throw new Error(e)
  })
}

export const editIndividualData = async(id: string, uploadImageFileData: FileList | undefined, isNew: boolean, data: any) => {
  if(isNew){
    const exampleRef = collection(firestore, "interviewer") 
    const response = await addDoc(exampleRef, data)
    .catch((e) => {
      throw new Error(e)
    })
    if (uploadImageFileData) {
      await uploadImageFile(uploadImageFileData, response.id)
    }
    return response.id
  } else {
    const exampleRef = doc(firestore, "interviewer", id)
    await setDoc(exampleRef, data, { merge: true })
    .catch((e) => {
      throw new Error(e)
    })
    if (uploadImageFileData) {
      await uploadImageFile(uploadImageFileData, id)
    }
  }
}

const uploadImageFile = async(file: FileList, id: string) => {
  const metadata = {
    contentType: 'image/*'
  }
  const storageRef = REF(storage, 'images/' + id);

  const uploadTask = uploadBytesResumable(storageRef, file[0], metadata)
  await new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    }, 
    (error) => {
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
      reject('画像のアップロードに失敗しました')
    }, 
    () => {
      // Upload completed successfully, now we can get the download URL
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
      resolve('')
    });
  })
}