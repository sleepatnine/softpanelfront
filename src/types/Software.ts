export enum Statuses {
  AVALIBLE = 'avalible',
  NOT_AVALIBLE = 'not avalible',
  TESTING = 'testing'
}

export interface ISoftwareCard {
  avatar: string
  name: string
  status: Statuses
  reliaseDate: string
}

export interface IDescriptionTitle {
  title: string;
}

export interface IPrice {
  cost: number,
  time: number
}

export interface ISoftwareInfo {
  id: number
  assets: string[]
  description: string
  functions: string[]
  prices: IPrice[]
}
