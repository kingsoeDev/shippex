import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isLoading } from 'expo-font';



// Define the type for the state
interface ShipmentState {
  search: string;
  password: string;
  url: string;
  shipmentStatus:Array<any>;
  data:Array<any>;
  selectedStatus:Array<string>;
  selectedIndex:Array<string>;
  isLoading:boolean;
}




// Define the initial state using the LoginState type
const initialState: ShipmentState = {
  search: "",
  password:"",
  url:"",
  shipmentStatus:[],
  selectedStatus:[],
  data:[],
  isLoading:false,
  selectedIndex:[],
};



export const shipment = createSlice({
  name: 'shipment',
  initialState,
  reducers: {
    // Define the action payload type
    setShipmentStateValue: (state, action: PayloadAction<Partial<ShipmentState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

// Export actions
export const { setShipmentStateValue } = shipment.actions;

// Export the reducer
export default shipment.reducer;
