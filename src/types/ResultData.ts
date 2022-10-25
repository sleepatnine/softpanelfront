export interface IResultData { // Iresult
    id: number
    isChecked: boolean
    progress: number
    date: string
    showUrl: string
    downloadUrl: string
    handleChange?: () => void
    avatar: string
}
  