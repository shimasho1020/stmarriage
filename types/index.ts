import { serverTimestamp } from 'firebase/firestore';
export type CaseList = {
  age: number
  term?: number
  datingTerm?: number
  partnerAge?: number
  sex: '男性' | '女性' | ''
  name?: string
  job?: string
  img?: string
  isInterview: boolean
}
export type InterviewContent = {
  title: string
  text: string
}
export type Interview = {
  aboutText: string
  interviewContents: InterviewContent[]
}
export type Interviewer = {
  timeStamp?: any
  isPublic: boolean
  caseList: CaseList
  interview: Interview
  imagePosition?: number
}
export type DisplayInterviewer = Interviewer & {
  id: string
  url?: string
}