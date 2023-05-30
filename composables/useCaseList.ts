import { computed, ref, onMounted } from '@nuxtjs/composition-api'
import { DisplayInterviewer } from '~/types/index'
import { getInterviewerCaseList } from '~/services/FirebaseService'
import { DisplayCaseList } from '~/types/index'

export const useCaseList = (includeNotPublic: boolean) => {
  const displayCaseList = ref<DisplayCaseList[]>([])
  onMounted( async() => {
    const results: DisplayInterviewer[] = await getInterviewerCaseList()
    displayCaseList.value = results.map((val) => {
      return {
        id: val.id,
        url: val.url ?? '',
        isPublic: val.isPublic,
        imagePosition: val.imagePosition ?? 0,
        ...val.caseList
      }
    })
    .filter(val => {
      return includeNotPublic ? true : val.isPublic
    }) 
  })

  return { displayCaseList }
}