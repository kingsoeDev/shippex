import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';
import { filterDrawerStyle, loginStyles, primaryColor } from '../../Style/styles';
import AntDesign from '@expo/vector-icons/AntDesign';


interface FilterDrawerComponentProps {
 onClose: () => void; 
 onDoneHandler: () => void; 
selectHandler: (value:string) => void; 
  visible: boolean;
  data:Array<string>;
  selectedStatus:Array<string>;
}

const FilterDrawerComponent: React.FC<FilterDrawerComponentProps> = ({ onClose, visible,onDoneHandler, selectHandler,data, selectedStatus }) => {

  const isSelected = (value: string) => {
    return selectedStatus.includes(value);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} 
    >
      <View style={[filterDrawerStyle.modalContainer]}>
      <View style={[filterDrawerStyle.modalContent]}>
       <View style={[filterDrawerStyle.flexBetween,{borderBottomWidth:1,borderBottomColor:"#EAE7F2",paddingBottom:10}]}>
       <Pressable onPress={onClose}>
            <Text style={filterDrawerStyle.cancelBtn}>Cancel</Text>
        </Pressable>
        <Text style={filterDrawerStyle.title}>Filters</Text>
        <Pressable onPress={onDoneHandler}>
            <Text style={filterDrawerStyle.cancelBtn}>Done</Text>
        </Pressable>
       </View>
       <Text style={filterDrawerStyle.subTitle}>SHIPMENT STATUS</Text>
       <View style={[filterDrawerStyle.statusListWrapper]}>
        {data?.map((data:any,i)=>(
          <Pressable 
           onPress={()=>selectHandler(data?.name)}
          key={i} style={[filterDrawerStyle.selectBtn,{borderWidth:isSelected(data?.name) ? 1:0, borderColor:primaryColor}]}>
            <Text style={filterDrawerStyle.selectBtnText}>{data?.name}</Text>
          </Pressable>
        ))}
       </View>
     </View>
      </View>
    </Modal>
  );
};

export default FilterDrawerComponent;
