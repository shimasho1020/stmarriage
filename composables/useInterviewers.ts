import { computed, ref, useAsync } from '@nuxtjs/composition-api'
import { DisplayInterviewer } from '~/types/index'
import { getInterviewers } from '~/services/FirebaseService'

export const useInterviewers = () => {
  const interviewers = ref<DisplayInterviewer[]>([])
  useAsync( async() => {
    interviewers.value = await getInterviewers()
  })
  const displayCaseList = computed(() => {
    return interviewers.value.map((val, index) => {
        return {
          id: val.id,
          url: selectImg(index),
          ...val.caseList
        }
      })
  })
  return { displayCaseList }
}

const selectImg = (index: number):string => {
  if(index == 0) {return '/images/sample_couple_1.webp'}
  else if(index == 1) {return '/images/sample_couple_2.webp'}
  else {return '/images/sample_couple_3.webp'}
}