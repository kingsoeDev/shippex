import { createAsyncThunkForPostEndpoint, createAsyncThunkForGetEndpoint } from "./globalActionProcessor"

interface LoginFormResponse {
    success: boolean;
    message?: string;
  }

interface shipmentStatusResponse {
   path:string;
}
 

  export const handleLoginRequest = createAsyncThunkForPostEndpoint<FormData, LoginFormResponse>("LOGIN", true);

  export const fetchShipmentStatusListRequest = createAsyncThunkForGetEndpoint("FETCH_SHIPMENT_STATUS");
  export const fetchShipmentListRequest = createAsyncThunkForGetEndpoint("FETCH_SHIPMENTS");

