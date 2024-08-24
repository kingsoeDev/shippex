import React from 'react';
import { Modal, View, Text, Pressable, ActivityIndicator } from 'react-native';
import { colorWhite, loginDrawerStyle, loginStyles, primaryColor } from '../../Style/styles';
import AntDesign from '@expo/vector-icons/AntDesign';
import UrlInputComponent from './Input/UrlInputComponent';
import UsernameInputComponent from './Input/UsernameInputComponent';
import PasswordInputComponent from './Input/PasswordInputComponent';
import { RootState } from '../../Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginStateValue } from '../../Redux/Reducer/login';
import { useNavigate } from 'react-router-native';
import { handleLoginRequest } from '../../Redux/Action/generalAction';
import Toast from 'react-native-toast-message';
import { showToast, toastConfig } from '../../Helper/helpers';
import { setUserStateValue } from '../../Redux/Reducer/user';


interface LoginDrawerComponentProps {
  onClose: () => void; 
  visible: boolean;
 
}

const LoginDrawerComponent: React.FC<LoginDrawerComponentProps> = ({ onClose, visible }) => {

    const login= useSelector((state:RootState)=>state.login)
    const navigate = useNavigate()

const dispatch  = useDispatch();
const inputChangeHandler = (value:string,attribute:string) =>{
   dispatch(setLoginStateValue({
    [attribute]:value
  }))
}


//function to validate input before submition
const verifiedFieldData = () =>{
  if (login.email.length > 3) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const result = re.test(String(login.email).toLowerCase());
    if (result == false) {
      showToast("Please enter a valid email address!")
       return true;
    } 

  } else if(login.email.length < 4) {
    showToast("Email should be more than 4 characters!")
    return true;
  }
   if (login.password.length < 1) {
    showToast("Password field is compulsory!")
    return true;
  }
  
}

//function to submit login form
const submitLoginForm = () =>{
  const error = verifiedFieldData();

  if(!error)
  {
  dispatch(setLoginStateValue({
    isLoading:true
  }))
  const formData = new FormData()
   formData.append('usr',login.email)
   formData.append('pwd',login.password)
  dispatch(handleLoginRequest(formData) as any)
  .then((result:any)=>{
    dispatch(setLoginStateValue({
      isLoading:false
    }))
    const response = result.payload
   switch(response.status)
   {
    case 401 :
      showToast(response.data.message,'error')
      break;
    case 200:
      showToast('Authentication Successful','success','Request Successful')
      dispatch(setUserStateValue({
        isLoggin:true,
        name:response.data?.full_name
      }))
     setTimeout(() => {
      navigate('/')
     }, 2000);
      break;
    default:
      showToast(response.data.message,'error')
    break;
   }
  })
  .catch((error:any)=>{
    dispatch(setLoginStateValue({
      isLoading:false
    }))
    showToast(error?.message,'error')
  })
}
  
}

  return (
    <>
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} 
    >
      <View style={[loginDrawerStyle.modalContainer]}>
      <View style={[loginDrawerStyle.modalContent]}>
        <Pressable onPress={onClose}>
            <Text style={loginDrawerStyle.cancelBtn}><AntDesign name="left" size={17} color="#4561DB" />Cancel</Text>
        </Pressable>
        <Text style={loginDrawerStyle.title}>Login</Text>
        <Text style={loginDrawerStyle.subTitle}>Please enter your First, Last name and your phone number in order to register</Text>
         <UrlInputComponent  url={login.url} inputChangeHandler={inputChangeHandler}/>
         <UsernameInputComponent email={login.email} inputChangeHandler={inputChangeHandler}/>
         <PasswordInputComponent password={login.password} inputChangeHandler={inputChangeHandler}/>
         <Pressable
         disabled={login.email.length > 0 && login.password.length > 0 ? false:true}
          style={[loginDrawerStyle.loginBtn,
            {backgroundColor:login.email.length > 0 && login.password.length > 0 ? primaryColor:"#EAE7F2"}]}
             onPress={submitLoginForm}>
            <Text style={[loginDrawerStyle.loginBtnText,{color:login.email.length > 0 && login.password.length > 0 ? colorWhite:"#A7A3B3", textAlign:"center", alignSelf:"center"}]}>
              {login.isLoading ?<ActivityIndicator color="#A7A3B3" size="small"/> :"Login"}
            </Text>
        </Pressable>
     </View>
      </View>
      <Toast config={toastConfig}/>
    </Modal>
   
    </>
  );
};

export default LoginDrawerComponent;
