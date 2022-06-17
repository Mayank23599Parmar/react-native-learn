import { StyleSheet, Text, View,Button,Dimensions } from 'react-native'
import React from 'react'
const ScreenWidth = Dimensions.get('window').width;
 function CategoresMeal({route,navigation}) {
   const {title,id}=route.params;
   React.useEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        // search bar options
        autoCapitalize:"words",barTintColor:"#eeee",inputType:"phone",
        disableBackButtonOverride:true
      }
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>{title} and  id {id}</Text>
      <Button title="go back" onPress={()=>{navigation.goBack()}}/>
      <Button title="Details" onPress={()=>{navigation.navigate("Details")}}/>
    </View>
  )
}
export default CategoresMeal
const styles = StyleSheet.create({
    container:{
        flex: 1,justifyContent:"center",alignItems:"center",
      
    },
})