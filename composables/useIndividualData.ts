import { ref, useAsync, useRouter } from '@nuxtjs/composition-api'
import { CaseList, Interview } from '~/types/index'
import { getIndividualData } from '~/services/FirebaseService'

export const useIndividualData = (id: string) => {
  const router = useRouter()
  const displayInterview = ref({} as Interview)
  const displayCaseList = ref({} as CaseList)
  const imageURL = ref('')
  const imagePosition = ref(0)

  useAsync( async() => {
    const result = await getIndividualData(id)
    .catch((e) => {
      console.log(e)
      router.push({path: '/'})
    })
    if(!result) return

    displayInterview.value = result.interviewer.interview
    displayCaseList.value = result.interviewer.caseList
    imageURL.value = result.imageURL
    imagePosition.value = result.interviewer.imagePosition ?? 0
  })

  return { displayInterview, displayCaseList, imageURL, imagePosition }
}