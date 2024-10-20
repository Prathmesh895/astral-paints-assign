import { configureStore } from '@reduxjs/toolkit'
import homepageReducer from '@/app/store/slice/HomeDataslice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        homepage: homepageReducer,
    },
  })
}