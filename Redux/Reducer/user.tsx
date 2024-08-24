import { createSlice, PayloadAction } from '@reduxjs/toolkit';



// Define the type for the state
interface LoginState {
  name: string;
  isLoggin: boolean;

}




// Define the initial state using the LoginState type
const initialState: LoginState = {
  name: "",
  isLoggin:false,
};



export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Define the action payload type
    setUserStateValue: (state, action: PayloadAction<Partial<LoginState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

// Export actions
export const { setUserStateValue } = user.actions;

// Export the reducer
export default user.reducer;
