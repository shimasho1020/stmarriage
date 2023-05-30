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
export type DisplayCaseList = {
  id: string,
  url: string,
  isPublic: boolean,
  imagePosition: number
} & CaseList
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

export type ChartDataset = {
  label?: string,
  data: any[],
  borderColor?: string[] | string,
  backgroundColor?: string[] | string,
}
export type ChartData = {
  labels: string[],
  datasets: ChartDataset[],
}