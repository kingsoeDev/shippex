import React from 'react'
import { Pressable, Text } from 'react-native'
import { styles } from '../../../Style/styles'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


interface FilterButtonProps {
    clickHandler: () => void;
}

function ScanButton(props: FilterButtonProps) {
    const { clickHandler } = props

    return (
        <Pressable
            onPress={clickHandler}
            style={styles.scanBtn}>
            <Text style={styles.scanBtnTxt}>
                <MaterialCommunityIcons name="line-scan" size={20} color="#FFF" />  Add Scan
            </Text>
        </Pressable>
    )
}

export default ScanButton
