import React from 'react'
import { TextInput, View, Text } from 'react-native'
import { inputStyle } from '../../../Style/styles'

interface Props {
    url:string;
    inputChangeHandler:(value: string, attribute: string) => void; 
}

function UrlInputComponent(props: Props) {
    const {url, inputChangeHandler} = props

    return (
        <View   style={inputStyle.container}>
           {url.length > 0 && <Text style={inputStyle.label}>URL</Text>}
          <View style={inputStyle.flex}>
          {url.length > 0 && <Text style={inputStyle.urlPrefix}>https:// </Text>}
            <TextInput
             keyboardType="default"  
            placeholder='URL' 
            value={url}
            onChangeText={(txt)=>inputChangeHandler(txt,'url')}
            style={[inputStyle.input]}
            placeholderTextColor="#A7A3B3"
            />
          </View>
        </View>
    )
}

export default UrlInputComponent
