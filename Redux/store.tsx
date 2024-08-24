import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './Reducer/login';
import shipmentReducer from './Reducer/shipment';
import userReducer from './Reducer/user'



export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const store = configureStore({
  reducer: {
  shipment:shipmentReducer,
  login:loginReducer,
  user:userReducer
  },
});

export default store;
