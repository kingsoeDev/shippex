import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_ENDPOINTS } from '../../Config/ApiEndpoint'

import { processPostFormRequest, processPostRequest, processGetRequest,processGetFormRequest } from '../../Config/RequestProcessor'

interface ApiResponse<T> {
  status: number | 'error';
  data: T | string;  
}
  export const createAsyncThunkForGetEndpoint = (endpoint:any) => {


    return createAsyncThunk(`api/${endpoint}`, async (path:string ="", { dispatch }) => {
      try {
       
        const response = await processGetRequest(`${API_ENDPOINTS[endpoint]}${path}`) 

        
        if (!response.ok) {
            const errorData = await response.json();
            return {
                status: response.status,
                data: errorData
            };
        } else {
            const responseData = await response.json();
            return {
                status: response.status,
                data: responseData
            };
        }
    } catch (error) {
        return {
            status: 'error',
            data: error.message 
        };
    }
    });

  };


  export const createAsyncThunkForPostEndpoint = <TRequest, TResponse>(
    endpoint: string,
    isFormRequest = false
  ) => {
    return createAsyncThunk<ApiResponse<TResponse>, TRequest>(
      `api/${endpoint}`,
      async (data: TRequest) => {
        try {
          const response = isFormRequest
            ? await processPostFormRequest(API_ENDPOINTS[endpoint],data)
            : await processPostRequest(API_ENDPOINTS[endpoint], data);
  
          if (!response.ok) {
            const errorData = await response.json();
            return {
              status: response.status,
              data: errorData
            };
          } else {
            const responseData = await response.json();
            return {
              status: response.status,
              data: responseData
            };
          }
        } catch (error) {
          return {
            status: 'error',
            data: (error instanceof Error) ? error.message : 'Unknown error occurred'
          };
        }
      }
    );
  };


  

  export const createAsyncThunkForGetFormDataEndpoint = <TRequest, TResponse>(
    endpoint: string
  ) => {
    return createAsyncThunk<ApiResponse<TResponse>, TRequest>(
      `api/${endpoint}`,
      async (data: TRequest) => {
        try {
          const response =  await processGetFormRequest(API_ENDPOINTS[endpoint],data)
           
  
          if (!response.ok) {
            const errorData = await response.json();
            return {
              status: response.status,
              data: errorData
            };
          } else {
            const responseData = await response.json();
            return {
              status: response.status,
              data: responseData
            };
          }
        } catch (error) {
          return {
            status: 'error',
            data: (error instanceof Error) ? error.message : 'Unknown error occurred'
          };
        }
      }
    );
  };