import React, { useRef } from 'react'
import {  Animated} from 'react-native';
import { NativeRouter, Route, Routes } from "react-router-native";
import LoginScreen from './View/Screen/Login';
import DashboardLayout from './View/Layout/DashboardLayout';
import ShipmentScreen from './View/Screen/Shipment';
import { styles } from './Style/styles';
import { primaryColor } from './Style/styles';



interface Props { }

function NativeRoute(props: Props) {
    const { } = props

    
    const fadeAnim = useRef(new Animated.Value(0)).current;
      React.useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 4000, 
                useNativeDriver: true,
            }
        ).start();
    }, [fadeAnim]);

    return (
        <NativeRouter>
        <Animated.View style={[styles.routeContainer,{backgroundColor:primaryColor}]}>
                <Routes >
                <Route path="/login" Component={LoginScreen} />
                <Route Component={DashboardLayout}>
                <Route path="/" Component={ShipmentScreen} />
                </Route>
            </Routes>
            </Animated.View>
        </NativeRouter>
    )
}

export default NativeRoute
