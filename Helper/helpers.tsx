
import Toast, { ErrorToast, BaseToast } from "react-native-toast-message";
export const showToast = (message:any, type="error", header="Validation Error") => {
    Toast.show({
      type: type,
      text1: header,
      text2: message
    });
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