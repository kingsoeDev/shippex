import React from 'react'
import { View, Text, Image,FlatList, SafeAreaView, ActivityIndicator, RefreshControl, Dimensions, Platform } from 'react-native'
import Checkbox from 'expo-checkbox';
import { styles, shipmentStyles, primaryColor } from '../../Style/styles'
import HeaderComponent from '../Component/HeaderComponent'
import SearchInputComponent from '../Component/Input/SearchInputComponent'
import { RootState } from '../../Redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { setShipmentStateValue } from '../../Redux/Reducer/shipment'
import FilterButton from '../Component/Button/FilteredButton'
import ScanButton from '../Component/Button/ScanButton'
import FilterDrawerComponent from '../Component/FilterDrawerComponent'
import ShipmentItem from '../Component/ShipmentItem';
import { fetchShipmentStatusListRequest, fetchShipmentListRequest } from '../../Redux/Action/generalAction';
import Toast from 'react-native-toast-message';
import { showToast, toastConfig, objectToQueryString } from '../../Helper/helpers';
import { useNavigate } from 'react-router-native';


interface Props {
filterData:any;
}


function ShipmentScreen(props: Props) {
    const {} = props
    const [isChecked, setChecked] = React.useState<boolean>(false);
    const [filterModal, setFilterModal] = React.useState<boolean>(false)
    const shipment= useSelector((state:RootState)=>state.shipment)
    const user= useSelector((state:RootState)=>state.user)
    const navigate = useNavigate()
  
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        fetchShipmentStatus();
        fetchShipment();
        dispatch(setShipmentStateValue({
          selectedIndex:[],
          selectedStatus:[]
        }))
        setRefreshing(false);
      }, 2000);
    }, []);

const dispatch  = useDispatch();
const inputChangeHandler = (value:string,attribute:string) =>{
   dispatch(setShipmentStateValue({
    [attribute]:value
  }))
}

//function to open flatlist inner component
const dropdownHandler = (value: string) => {
  const currentSelectedIndex = shipment.selectedIndex || []; 

  const isAlreadySelected = currentSelectedIndex.includes(value);

  const updatedSelectedIndex = isAlreadySelected
    ? currentSelectedIndex.filter(status => status !== value)
    : [...currentSelectedIndex, value];
  dispatch(setShipmentStateValue({
    selectedIndex: updatedSelectedIndex,
  }));
};
//function to filter status
const selectChangeHandler = (value: string) => {
 
    const currentSelectedStatus = shipment.selectedStatus || []; 

    const isAlreadySelected = currentSelectedStatus.includes(value);
  
    const updatedSelectedStatus = isAlreadySelected
      ? currentSelectedStatus.filter(status => status !== value)
      : [value];
    dispatch(setShipmentStateValue({
      selectedStatus: updatedSelectedStatus,
    }));
  };
  

  //function to open filter drawer
const filterHandler = ()=>{
    setFilterModal(true)
}



//function to fetch shipment status
const fetchShipmentStatus = () =>{

 let path = "?doctype=AWB Status&fields=*"
  dispatch(fetchShipmentStatusListRequest(path) as any)
  .then((result:any)=>{
  
    const response = result.payload
   switch(response.status)
   {
    case 401 :
      navigate('/login')
      break;
    case 200:
      dispatch(setShipmentStateValue({
       shipmentStatus:response.data.message
      }))
   
      break;
    default:
      showToast(response.data.message,'error')
    break;
   }
  })
  .catch((error:any)=>{
   
    showToast(error?.message,'error')
  })
  
}
//function to submit search query
const handleSearchQuery = () =>{
  const data ={
    name: ["like", "%"+shipment.search+"%"],
    status: ["like", "%"+ shipment.selectedStatus.join()+"%"],
  }

  fetchShipment(data)
}
//function to submit filternwhen done is clicked
const doneHandler = () =>{

  const data ={
    name: ["like", "%"+shipment.search+"%"],
     status: ["like", "%"+ shipment.selectedStatus.join()+"%"],
  }
  fetchShipment(data)
  setFilterModal(false)
}


//function fetch shipments

const fetchShipment = (filter=null) =>{
  let filterData :any;
  if(filter == null)
  { 
     filterData = {
   }
  }
  else{
    filterData =filter;
  }


  const data = {
    doctype: "AWB",
    fields: ["*"],
    filters:filter
  };

  let path = objectToQueryString(data)
   dispatch(setShipmentStateValue({
    isLoading:true
   }))
   dispatch(fetchShipmentListRequest(`?${path}`) as any)
   .then((result:any)=>{
     const response = result.payload
     dispatch(setShipmentStateValue({
      isLoading:false
     }))
    switch(response.status)
    {
     case 401 :
       navigate('/login')
       break;
     case 200:
       dispatch(setShipmentStateValue({
        data:response.data.message
       }))
    
       break;
     default:
       showToast(response.data.message,'error')
     break;
    }
   })
   .catch((error:any)=>{
    dispatch(setShipmentStateValue({
      isLoading:false
     }))
     showToast(error?.message,'error')
   })
   
 }

React.useEffect(()=>{
  fetchShipmentStatus()
  fetchShipment()
},[])



    return (
        <>
        <SafeAreaView style={styles.containerInner}>
          <View style={styles.safeAreaContainer}>
         <HeaderComponent name={user.name}/>
         <SearchInputComponent  search={shipment.search} inputChangeHandler={inputChangeHandler} handleSearchQuery={handleSearchQuery}/>
          <View style={shipmentStyles.topButtonWrapper}>
            <FilterButton onFilterHandler={filterHandler}/>
            <ScanButton clickHandler={()=>{}}/>
        </View>

        <View style={shipmentStyles.flatListHeader}>
            <Text style={shipmentStyles.txt1}>Shipments</Text>
           <View style={shipmentStyles.flex} >
             <Text><Checkbox  value={isChecked} style={shipmentStyles.markAllCheckbox} onValueChange={setChecked} /></Text>
              <Text style={shipmentStyles.txt2}> Mark All</Text>
           </View>
        </View>
        {/* shippment list section */}
      
      
      {shipment.isLoading ?
      <View  style={{height:400, justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
        <Text><ActivityIndicator size="large" color={primaryColor}/></Text>
      </View> :  
      <FlatList
        data={shipment.data}
        renderItem={({item}) => <ShipmentItem data={item} dropdownHandler={dropdownHandler} 
        selectedIndex={shipment.selectedIndex}   shipmentStatus={shipment.shipmentStatus}/>
      
      }
        keyExtractor={item => item.name}
        style={{height:Platform.OS ==='ios' ? Dimensions.get('screen').height/2.0 : Dimensions.get('screen').height/2.2}}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListFooterComponent={() =>
          refreshing && <ActivityIndicator size="large" color={primaryColor} />
        }
      />}
     
        <View style={{height:400}}/>
        </View>
        </SafeAreaView>
        <FilterDrawerComponent visible={filterModal} onClose={()=>{setFilterModal(false)}} selectHandler={selectChangeHandler} data={shipment.shipmentStatus}
        selectedStatus={shipment.selectedStatus}
        onDoneHandler={doneHandler}
        />
        <Toast config={toastConfig}/>

</>

        
    )
}

export default ShipmentScreen
