import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./state/createSlice";
import { UserApi } from "./api/UserApi";
export default configureStore( {
  reducer: {
counter:CounterReducer,
[UserApi.reducerPath]:UserApi.reducer

  },
  middleware:(getDefaultMiddleware)=>
getDefaultMiddleware().concat(UserApi.middleware)
  
})
