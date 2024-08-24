import React from 'react'
import { Pressable, Text } from 'react-native'
import { styles } from '../../../Style/styles'
import Ionicons from '@expo/vector-icons/Ionicons';


interface FilterButtonProps {
    onFilterHandler: () => void;
}

const  FilterButton: React.FC<FilterButtonProps> = ({onFilterHandler}) => {
   

    return (
       <Pressable
         onPress={onFilterHandler}
        style={styles.filterBtn}>
        <Text style={styles.fiterBtnTxt}>
            <Ionicons name="filter" size={16} color="#58536E" /> Filter
        </Text>
        </Pressable> 
    )
}

export default FilterButton
