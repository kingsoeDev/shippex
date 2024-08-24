import React from 'react'
import { View, Text, Image, ImageSourcePropType, Pressable, StatusBar, Platform} from 'react-native'
import { loginStyles } from '../../Style/styles'
import logo from '../../assets/image/logo.png'
import LoginDrawerComponent from '../Component/LoginDrawerComponent'


interface LoginProps {
    logo?:ImageSourcePropType;
    isOpen:boolean;
}


function LoginScreen(props: LoginProps) {
    const {} = props

    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const toggleLoginDrawer = () => {
      setIsOpen(prevState => !prevState); 
    };
  
    const closeDrawer = () => {
      setIsOpen(false); 
    };
  

    return (
      <View style={{paddingTop:Platform.OS ==="ios"? 40:0, backgroundColor:isOpen ? "#000":"#2F50C1"}}>
         <StatusBar backgroundColor={isOpen ? "#000" :"#2F50C1"}  barStyle={isOpen && Platform.OS  !=="ios" ? "dark-content":"light-content"} animated={true}/>
        <View style={loginStyles.container} >
          <Image source={logo} style={loginStyles.logo}/>
          <Pressable style={loginStyles.loginBtn} onPress={toggleLoginDrawer}>
            <Text style={loginStyles.loginBtnText}>Login</Text>
          </Pressable>
        </View>
        <LoginDrawerComponent visible={isOpen} onClose={closeDrawer}/>
      </View>
    )
}

export default LoginScreen
