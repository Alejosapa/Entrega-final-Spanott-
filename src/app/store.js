import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../src/features/shop/shopSlice'

export default configureStore({
  reducer: {
    shop:shopReducer
  }
})