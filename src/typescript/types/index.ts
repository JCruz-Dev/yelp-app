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