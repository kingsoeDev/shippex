import React from 'react'
import { View, Text, Image, Pressable, TouchableHighlight } from 'react-native'
import Checkbox from 'expo-checkbox'
import boxIcon from '../../assets/image/box.png'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { shipmentItemStyles } from '../../Style/shipmentItemStyles';


interface ShipmentItemProps {
    data: any;
    dropdownHandler: (value:string)=>void;
    selectedIndex:Array<string>;
    shipmentStatus:Array<any>;
}

function ShipmentItem(props: ShipmentItemProps) {
    const { data,dropdownHandler, selectedIndex, shipmentStatus } = props
    const isSelected = (value: string) => {
        return selectedIndex.includes(value);
      };
      const statusColor = (value:string) =>
        {
          const color  = shipmentStatus.find(item => item.name === value);
          return  color ? color.color :"#000";
       
        }
    
    return (
        <TouchableHighlight>
        <View style={shipmentItemStyles.container} >
         
            <View style={shipmentItemStyles.topWrapper}>
                <Checkbox  style={[shipmentItemStyles.checkbox]}/>
                <Image source={boxIcon}  style={shipmentItemStyles.box}/>

                <View>
                    <Text style={shipmentItemStyles.txt1}>AWD</Text>
                    <Text style={shipmentItemStyles.txt2}>{data.name}</Text>
                    <View style={[shipmentItemStyles.flexBetween]}>
                        <Text style={shipmentItemStyles.txt3}>{data.origin_state}</Text>
                        <Text><AntDesign name="arrowright" size={13} color="#2F50C1" /></Text>
                        <Text style={shipmentItemStyles.txt3}>{data.destination_state}</Text>
                    </View>
                </View>
                <Pressable style={[shipmentItemStyles.statusBtn]}>
                    <Text style={[shipmentItemStyles.statusBtnTxt,{color:statusColor(data.status)}]}>{data.status}</Text>
                </Pressable>
                <Pressable onPress={()=>dropdownHandler(data.name)}
                 style={[shipmentItemStyles.openBtn,{backgroundColor:isSelected(data.name) ? "#6E91EC":"#FFF"}]}>
                    <Text><AntDesign name="arrowsalt" size={24} color={isSelected(data.name) ? "#FFF":"#6E91EC"} /></Text>
                </Pressable>
            </View>
            {/* bottom dropdown */}
            {isSelected(data.name) && 
            <View style={[shipmentItemStyles.bottomWrapper]}>
                <View style={[shipmentItemStyles.flexBetween]}>
                    <View>
                        <Text style={shipmentItemStyles.txt4}>Origin</Text>
                        <Text style={shipmentItemStyles.txt5}>{data.origin_state}</Text>
                        <Text style={shipmentItemStyles.txt6}>{data.origin_address_line_1}</Text>
                    </View>
                    <Text><AntDesign name="arrowright" size={16} color="#2F50C1" /></Text>
                    <View >
                        <Text style={shipmentItemStyles.txt4}>Destination</Text>
                        <Text style={shipmentItemStyles.txt5}>{data.destination_state}</Text>
                        <Text style={shipmentItemStyles.txt6}>{data.destination_address_line_1}</Text>
                    </View>
                </View>
                <View style={[shipmentItemStyles.flexEnd,{marginTop:20}]}>
                    <Pressable style={shipmentItemStyles.callBtn}>
                        <Text style={shipmentItemStyles.callBtnTxt}><Feather name="phone" size={16} color="#fff" /> Call</Text>
                    </Pressable>
                    <Pressable style={shipmentItemStyles.whatsappBtn}>
                        <Text style={shipmentItemStyles.whatsappBtnText}><FontAwesome5 name="whatsapp" size={16} color="#fff" /> Whatsapp</Text>
                    </Pressable>
                </View>
            </View>
}
        </View>
        </TouchableHighlight>
    )
}

export default ShipmentItem
