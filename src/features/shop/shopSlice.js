import { createSlice } from '@reduxjs/toolkit'
import categories from '../../data/categories.json'
import productos from '../../data/productos.json'

const initialState={
    categories:categories,
    productos:productos
  }

export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {},
})

export const {  } = shopSlice.actions

export default shopSlice.reducer