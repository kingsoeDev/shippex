import { createSlice, PayloadAction } from '@reduxjs/toolkit';



// Define the type for the state
interface LoginState {
  email: string;
  password: string;
  url: string;
  isLoading:boolean;
}




// Define the initial state using the LoginState type
const initialState: LoginState = {
  email: "",
  password:"",
  url:"",
  isLoading:false
};



export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    // Define the action payload type
    setLoginStateValue: (state, action: PayloadAction<Partial<LoginState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

// Export actions
export const { setLoginStateValue } = login.actions;

// Export the reducer
export default login.reducer;
