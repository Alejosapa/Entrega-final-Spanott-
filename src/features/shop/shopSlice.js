import { createSlice } from '@reduxjs/toolkit'
import categories from '../../data/categories.json'

const initialState={
    Categories:categories,
    productsFilteredByCategory:[],
    categorySelected:null
  }

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
  },
})

export const {  } = shopSlice.actions

export default shopSlice.reducer