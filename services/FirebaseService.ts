import { getStorage, ref as REF, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc, getDocs, doc, setDoc, updateDoc, arrayUnion, arrayRemove, runTransaction, getDoc, query, where, orderBy } from "firebase/firestore"
import { firestore, storage } from '~/plugins/firebase.js'
import { Interviewer, DisplayInterviewer } from '~/types/index'
import { CaseList } from '../types/index';

export const getInterviewers = async() => {
  const q = query(collection(firestore, "interviewer"), orderBy("timeStamp", "desc"))
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
  const q = query(collection(firestore, "interviewer"), orderBy("timeStamp", "desc"))
  const querySnapshot = await getDocs(q)
  const results = await Promise.all(
    querySnapshot.docs.map(async(doc) => {
      const url = await getDownloadURL(REF(storage, `images/${doc.id}`))
      .catch((error) => {
        console.log(error)
      })
      return {
        id: doc.id,
        url: url ?? '',
        ...doc.data() as Interviewer
      }
    })
  )
  const interviewerCaseList = results.filter(val => {
    return val.isPublic
  }) 

  return interviewerCaseList
}