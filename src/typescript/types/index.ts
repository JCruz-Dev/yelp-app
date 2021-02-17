import { PayloadAction } from '@reduxjs/toolkit'
import store from '../../redux/store'
//Form
export type EventForm = React.FormEvent<HTMLFormElement>

//State
export type Location = {
  __typename: string
  address1: string
  city: string
}
export type businessState = {
  __typename: string
  id: string
  name: string
  rating: number
  review_count: number
  photos: Array<string>
  phone: string
  location: Location
  viewed?: boolean
}

//Redux Types
export type AppDispatch = typeof store.dispatch
export type PayloadActionString = PayloadAction<string>
export type PayloadActionObject = PayloadAction<[]>
export type userSearch = {
  userData: {
    queryData: []
  }
}
//Function types

export type SvgProp = {
  svgIcon: string
}

//Title types
export type TitleProps = {
  titleName: string
  Tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  classes?: string
}

//Paragrap types
export type ParagraphProps = {
  classes?: string
  name: string
}

//Image Types
export type ImageProps = {
  imgSource: string
  imgAlt: string
  classes?: string
}

//Info Details Types
export type infoDetailProps = {
  icon: string
  infoName: string | number
}

//Search Types
export type searchFormProps = {
  onSubmit: (search: string) => void
  callLazyQuery: () => void
}
