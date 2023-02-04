import { computed, ref, useAsync } from '@nuxtjs/composition-api'
import { Interviewer, DisplayInterviewer } from '~/types/index'
import { getInterviewerCaseList } from '~/services/FirebaseService'

export const useCaseList = (includeNotPublic: boolean) => {
  const interviewerCaseList = ref<DisplayInterviewer[]>([])
  useAsync( async() => {
    interviewerCaseList.value = await getInterviewerCaseList()
  })
  const displayCaseList = computed(() => {
    return interviewerCaseList.value.map((val) => {
      return {
        id: val.id,
        url: val.url,
        isPublic: val.isPublic,
        imagePosition: val.imagePosition,
        ...val.caseList
      }
    })
    .filter(val => {
      return includeNotPublic ? true : val.isPublic
    }) 
  })

  return { displayCaseList }
}