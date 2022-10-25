export interface IResultTitleColumn {
    name: string
    sortFunction: (() => void) | undefined
  }