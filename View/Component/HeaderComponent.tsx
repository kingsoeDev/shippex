import React from 'react'
import { View, Image, Text } from 'react-native'
import avatar from '../../assets/image/photo.png'
import blueLogo from '../../assets/image/blue-logo.png'
import Octicons from '@expo/vector-icons/Octicons';
import { styles } from '../../Style/styles';

interface HeaderComponentProps { 
    name:string;
}

function HeaderComponent(props: HeaderComponentProps) {
    const {name } = props

    return (
        <View>
            <View style={styles.headerContainer} >
                <Image source={avatar} />
                <Image source={blueLogo} />
                <View style={styles.bell}>
                    <Text ><Octicons name="bell" size={24} color="#2F50C1" /></Text>
                </View>
            </View>
            <View style={styles.bottomHeader}>
                <Text style={styles.hello}>Hello,</Text>
                <Text style={styles.name}>{name !=""? name :"Ibrahim Shaker"}</Text>
            </View>
        </View>
    )
}

export default HeaderComponent
