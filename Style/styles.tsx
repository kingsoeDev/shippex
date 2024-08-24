import { StyleSheet, Dimensions, Platform } from "react-native";

export const primaryColor ="#2F50C1";
export const colorWhite ="#FFF";
const {height, width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
    container: {
       flex:1,
    },
    containerInner: {
        flex: 1,
        paddingHorizontal:15,
        paddingVertical:20,
      },
      routeContainer: {
        flex: 1,
    },
    safeAreaContainer:{
      padding:Platform.OS ==="ios" ? 20 :0
    },
    headerContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center"
    },
    bell:{
      borderRadius:50,
      backgroundColor:"#F4F2F8",
      padding:7
    },
    bottomHeader:{
    marginTop:20
    },
    hello:{
      color:"#000",
      fontSize:14,
      fontFamily:"SpfRegularText",
    },
    name:{
      color:"#000",
      fontSize:28,
      fontFamily:"SpfSemiBoldText",
    },
    filterBtn:{
      backgroundColor:"#F4F2F8",
      width:"48%",
      paddingVertical:10,
      borderRadius:10
    },
    fiterBtnTxt:{
      flexDirection:"row",
      alignItems:"center",
      fontSize:16,
      fontFamily:"SpfRegularText",
      color:"#58536E",
       textAlign:"center"
    },
    scanBtn:{
      backgroundColor:primaryColor,
      width:"48%",
      paddingVertical:10,
      borderRadius:10
    },
    scanBtnTxt:{
      flexDirection:"row",
      alignItems:"center",
      fontSize:16,
      fontFamily:"SpfRegularText",
      color:"#FFF",
      textAlign:"center"
    }
  });

  export const loginStyles = StyleSheet.create({
    container: {
      height:height,
      backgroundColor: primaryColor,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal:20
    },
    logo:{
        width:width * 0.45,
        height:25
    },
    loginBtn:{
     position:"absolute",
     backgroundColor:colorWhite,
     bottom:100,
     width:"100%",
     height:56,
     flexDirection:"column",
     justifyContent:"center",
     borderRadius:10,
    },
    loginBtnText:{
         textAlign:"center",
         fontSize:17,
         color:primaryColor,
         fontFamily:"SpfBoldText"
    }
  });



  export const loginDrawerStyle = StyleSheet.create({
    modalContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent:"flex-end"
      
    },
    modalContent: {
       backgroundColor:colorWhite,
      height: Platform.OS ==="ios" ?"85%" :"97%",
      width: '100%',
      borderRadius: 10,
      paddingHorizontal: 20,
      paddingTop: 20,
  
    },
    cancelBtn:{
        color:"#4561DB",
        fontSize:17,
        fontFamily:"SpfRegularText"
    },
    title:{
        paddingTop:10,
        color:"#000",
        fontSize:34,
        fontFamily:"SpfSemiBoldText"
    },
    subTitle:{
        paddingTop:10,
        color:"#757281",
        fontSize:17,
         fontFamily:"SpfRegularText"
    },
    loginBtn:{
   
        position:"relative",
        backgroundColor:"#EAE7F2",
        marginTop:height/3.5,
        width:"100%",
        height:56,
        flexDirection:"column",
        justifyContent:"center",
        borderRadius:10,
       },
       loginBtnText:{
            textAlign:"center",
            fontSize:17,
            color:"#A7A3B3",
            fontFamily:"SpfBoldText"
       }

});



export const filterDrawerStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent:"flex-end",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalContent: {
     backgroundColor:colorWhite,
    height: Platform.OS ==="ios" ?"35%" :"35%",
    width: '100%',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 20,

  },
  flexBetween:{
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"center",
  },
  cancelBtn:{
      color:"#4561DB",
      fontSize:16,
      fontFamily:"SpfMediumText"
  },
  title:{
      color:"#000",
      fontSize:18,
      fontFamily:"SpfSemiBoldText"
  },
  subTitle:{
  fontSize:13,
  fontFamily:"SpfMediumText",
  paddingVertical:10
  },
  statusListWrapper:{
    flexDirection:"row",
    flexWrap:"wrap",
  },
  selectBtn:{
    backgroundColor:"#F4F2F8",
    paddingVertical:6,
    borderRadius:10,
    paddingHorizontal:15,
    marginRight:10,
    marginBottom:10,
  
  },
  selectBtnText:{
    color:"#58536E",
    fontSize:16,
    fontFamily:"SpfRegularText"
  },


});


export const inputStyle = StyleSheet.create({

    container: {
        backgroundColor:"#F4F2F8",
        height:56,
        paddingHorizontal:20,
        borderRadius:10,
        marginTop:30,
        flexDirection:"column",
        justifyContent:"center"
      },
      input:{
        fontSize:16,
        fontFamily:"SpfRegularText",
        color:"#2F50C1",
        width:"88%"
       
      },
      label:{
        fontSize:11,
        fontFamily:"SpfRegularText",
        color:"#58536E",
      },
      flex:{
            flexDirection:"row",
          
      },
      urlPrefix:{
        fontSize:16,
        color:"#58536E"
      }
      

});



  
export const bottomNavigationStyles = StyleSheet.create({
   
    bottomNavigation: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '100%',
      position:"absolute",
      borderTopWidth:1,
      top:Platform.OS=="ios" ? height * 0.90 : height * 0.85,
      height:"auto",
      paddingVertical:12,
      paddingBottom:30,
      borderTopColor:"#EAE7F2",
      zIndex:1000,
      backgroundColor:"#fff"
    },
    navItem: {
    flexDirection:"column",
    justifyContent:"center",
    alignContent:"center",
    },
    icon:{
        alignSelf:"center"
    },
    text:{
        color:"#A7A3B3",
        fontSize:11,
        fontFamily:"SpfRegularText",
        paddingTop:3

    },
    activeText:{
        color:"#5B4CCC"
    }
  });
  


  export const shipmentStyles = StyleSheet.create({
    topButtonWrapper:{
      marginTop:15,
      flexDirection:"row",
      justifyContent:"space-between"
    },
    flatListHeader:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginTop:20,
    },
    flex:{
      flexDirection:"row",
      alignItems:"center"
    },
    txt1:{
     fontSize:22,
     fontFamily:"SpfSemiBoldText"
    },
    txt2:{
    fontSize:18,
    fontFamily:"SpfRegularText",
    color:"#2F50C1"
    },
    markAllCheckbox:{
    borderWidth:1,
    borderColor:"#D0D5DD",
    marginBottom:-5,
    borderRadius:3,
    
    }
  });
  