import React from 'react'
import { TextInput, View,Text } from 'react-native'
import { inputStyle } from '../../../Style/styles'


interface Props {
    password:string;
    inputChangeHandler:(value: string, attribute: string) => void; 
}

function PasswordInputComponent(props: Props) {
    const {password, inputChangeHandler} = props

    return (
        <View   style={inputStyle.container}>
           {password.length > 0 &&  <Text style={inputStyle.label}>Password</Text>}
            <TextInput
             keyboardType="default"  
            placeholder='Password' 
            value={password}
            secureTextEntry={true}
            onChangeText={(txt)=>inputChangeHandler(txt,'password')}
            style={inputStyle.input}
            placeholderTextColor="#A7A3B3"
            />
        </View>
    )
}

export default PasswordInputComponent
