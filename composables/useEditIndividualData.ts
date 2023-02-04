import { computed, ref, useAsync, useRouter } from '@nuxtjs/composition-api'
import { serverTimestamp } from "firebase/firestore"
import { CaseList, Interview } from '~/types/index'
import { getIndividualData, editIndividualData } from '~/services/FirebaseService'

export const useEditIndividualData = (id: string) => {
  const router = useRouter()

  const thisPageId = ref(id)
  const isNew = ref(false)
  const isPublic = ref(false)
  const caseList = ref({isInterview: false} as CaseList)
  const imageURL = ref()
  const imagePosition = ref(0)

  const interviewCount = ref(0)
  const aboutText = ref('')
  const questionTitle = ref<string[]>([])
  const questionText = ref<string[]>([])

  const interview = computed<Interview>(() => {
    return {
      aboutText: aboutText.value,
      interviewContents: questionTitle.value.map((val, index) => {
        return {
          title: val,
          text: questionText.value[index]
        }
      }).filter((val) => {
        return !!val.text && !!val.title
      })
    }
  })

  useAsync( async() => {
    if(thisPageId.value == '0') {
      isNew.value = true
      interviewCount.value = 1
      return
    }

    const result = await getIndividualData(thisPageId.value)
    .catch((e) => {
      console.log(e)
      router.push({path: '/'})
    })
    if(!result) return

    isPublic.value = result.interviewer.isPublic
    caseList.value = result.interviewer.caseList
    aboutText.value = result.interviewer.interview.aboutText
    result.interviewer.interview.interviewContents.forEach((val) => {
      questionTitle.value.push(val.title)
      questionText.value.push(val.text)
      interviewCount.value++
    })
    imageURL.value = result.imageURL
    imagePosition.value = result.interviewer.imagePosition ?? 0
  })



  const addCount = () => {
    imagePosition.value += 1
  }
  const subtractCount = () => {
    imagePosition.value -= 1
  }
  const clearCount = () => {
    imagePosition.value = 0
  }
  

  
  const isSending = ref(false)
  const isError = ref(false)
  const completeMessage = ref('')

  const onSubmit = async() => {
    const data = isNew.value ? {
      timeStamp: serverTimestamp(),
      isPublic: isPublic.value,
      caseList: caseList.value,
      interview: interview.value,
      imagePosition: imagePosition.value,
    } : {
      isPublic: isPublic.value,
      caseList: caseList.value,
      interview: interview.value,
      imagePosition: imagePosition.value,
    }

    if(isSending.value){
      return;
    }
    isSending.value = true;
    completeMessage.value = '処理中…';

    try{
      const responseId = await editIndividualData(thisPageId.value, uploadImageFileData.value, isNew.value, data)
      if(responseId) {
        thisPageId.value = responseId
      }
      completeMessage.value = '保存しました';
      isNew.value = false
    } catch(e) {
      completeMessage.value = '失敗しました' + 'ERROR: ' + e;
      isError.value   = true;
    } finally {
      isSending.value = false;
      setTimeout(() => {
        completeMessage.value = ''
      }, 2500)
    }
  }

  const uploadImageFileData = ref<FileList>()
  const previewFile = (event: Event) => {
    const file = (event.target as HTMLInputElement).files;
    if(file === null) return
    const blob = new Blob(file as any, { type: "image/*" });
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      // 画像ファイルを base64 文字列に変換します
      imageURL.value = reader.result;
    }, false);
    reader.readAsDataURL(blob)

    uploadImageFileData.value = file
  }

  return { 
    isNew, 
    isPublic, 
    interviewCount, 
    aboutText, 
    questionTitle, 
    questionText, 
    interview, 
    caseList, 
    imageURL, 
    imagePosition, 
    isSending,
    isError,
    completeMessage,
    uploadImageFileData,
    onSubmit,
    previewFile,
    addCount, 
    subtractCount, 
    clearCount 
  }
}