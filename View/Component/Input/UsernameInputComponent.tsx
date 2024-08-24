import React from 'react'
import { TextInput, View,Text } from 'react-native'
import { inputStyle } from '../../../Style/styles'

interface Props {
    email:string;
    inputChangeHandler:(value: string, attribute: string) => void; 
}

function UsernameInputComponent(props: Props) {
    const {email, inputChangeHandler} = props

    return (
        <View   style={inputStyle.container}>
            {email.length > 0 && <Text style={inputStyle.label}>Username / Email</Text>}
          
            <TextInput
             keyboardType="default"  
            placeholder='Username / Email' 
            value={email}
            onChangeText={(txt)=>inputChangeHandler(txt,'email')}
            style={inputStyle.input}
            placeholderTextColor="#A7A3B3"
            />
        </View>
    )
}

export default UsernameInputComponent
