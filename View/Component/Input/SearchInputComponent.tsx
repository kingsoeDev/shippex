import React from 'react'
import { TextInput, View, Text, Pressable } from 'react-native'
import { inputStyle, primaryColor } from '../../../Style/styles'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


interface Props {
    search: string;
    inputChangeHandler: (value: string, attribute: string) => void;
    handleSearchQuery: () =>void;
}

function SearchInputComponent(props: Props) {
    const { search, inputChangeHandler,handleSearchQuery } = props
    const [inputIsClick, setInputIsClick] = React.useState<boolean>(false)

    return (
        <Pressable
            onPress={() => setInputIsClick(true)}
            style={[inputStyle.container, { borderColor: inputIsClick ? primaryColor : "#F4F2F8", borderWidth: 1 }]}>
            <View style={[inputStyle.flex, { alignItems: "center" }]}>
                <Text><EvilIcons name="search" size={34} color={inputIsClick ? primaryColor : "#A7A3B3"} /></Text>
                <TextInput
                    onPress={() => setInputIsClick(true)}
                    keyboardType="default"
                    placeholder='Search'
                    value={search}
                    onChangeText={(txt) =>{
                        inputChangeHandler(txt, 'search'),
                        setInputIsClick(true)

                    }}
                    onEndEditing={handleSearchQuery}
                    style={inputStyle.input}
                    placeholderTextColor="#A7A3B3"
                />
              {inputIsClick &&   <Pressable  onPress={() => {
                setInputIsClick(false),
                inputChangeHandler('','search')
              }}>
                    <Text><FontAwesome5 name="times" size={16} color={primaryColor} /></Text>
                </Pressable>}
            </View>
        </Pressable>
    )
}

export default SearchInputComponent
