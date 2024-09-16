import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { shopApi } from '../services/shop';
import shopReducer from '../features/shop/shopSlice';
import cartReducer from '../features/cart/cartSlice'

 const store = configureStore({
  reducer: {
    cart:cartReducer,
    shop:shopReducer,
    [shopApi.reducerPath]: shopApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
})
export default store;
setupListeners(store.dispatch)

