import React from 'react'
import { View, Text, Image, ImageSourcePropType, Pressable, StatusBar, Platform, TouchableWithoutFeedback} from 'react-native'
import { Outlet, Navigate } from 'react-router-native'
import { loginStyles, styles } from '../../Style/styles'
import BottomNavigation from '../Menu/BottomNavigation '
import { useSelector } from 'react-redux'
import { RootState } from '../../Redux/store'
interface DashboardLayoutProps {}

function DashboardLayout(props: DashboardLayoutProps) {
    const {} = props
 const user = useSelector((state:RootState)=>state.user)
 if(!user.isLoggin)
 {
    return (<Navigate to="/login"/>)
 }
    return (
    <TouchableWithoutFeedback>
    <View style={[styles.container,{paddingTop:Platform.OS ==="ios"? 40:0, backgroundColor:"#FFF"}]}>
        <StatusBar backgroundColor="#FFF"  barStyle={ Platform.OS==="ios" ?"dark-content":"light-content"} animated={true}/>
         <Outlet/>
        <BottomNavigation/>
     </View>
     </TouchableWithoutFeedback>
    )
}

export default DashboardLayout
