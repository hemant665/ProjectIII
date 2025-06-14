import { configureStore } from '@reduxjs/toolkit'
import UserSlice from './reducers/UserSlice'
import ProductSlice from './reducers/ProductSlice'
import CartSlice from './reducers/CartSlice'

export const store = configureStore({
  reducer: {
      users : UserSlice,
      products : ProductSlice,
      carts : CartSlice,
  },
})