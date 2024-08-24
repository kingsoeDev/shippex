
import Toast, { ErrorToast, BaseToast } from "react-native-toast-message";
import { Text, View } from "react-native";
export const showToast = (message:any, type="validator", header="Validation Error") => {
    Toast.show({
      type: type,
      text1: header,
      text2: message
    });
  }
  export const validatorToast = (data:any) =>{
      
      for (const key in data.errors) {
        if (data.errors.hasOwnProperty(key)) {
          const messagesForKey = data.errors[key]; 
          if (messagesForKey && messagesForKey.length > 0) {
            const msg= messagesForKey[0] 
            showToast(msg)
            break; 
          }
        }
      }
  }
export const toastConfig = {
 
    success: (props:any) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: '#4caf50' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400'
        }}
        text2Style={{
            fontSize: 14,
            fontFamily:"SpfSemiBoldText",
            zIndex:1000
            
          }}
      />
    ),
  
    error: (props:any) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
          fontFamily:"SpfBoldText",
          zIndex:1000
        }}
        text2Style={{
          fontSize: 14,
          fontFamily:"SpfSemiBoldText",
          zIndex:1000
          
        }}
      />
    ),
  
    
}



export function objectToQueryString(params:any) {
  const queryString = Object.keys(params)
    .map(key => {
      if (typeof params[key] === 'object') {
        return `${encodeURIComponent(key)}=${encodeURIComponent(JSON.stringify(params[key]))}`;
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
    })
    .join('&');
  
  return queryString;
}