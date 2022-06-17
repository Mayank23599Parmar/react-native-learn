import { StyleSheet, Text, View  ,Button} from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Categoreis from './Categoreis';
import TodoApp from './TodoApp';
const Drawer = createDrawerNavigator();

function MealDetails({navigation}) {

  return (<>
    <Drawer.Navigator>
      <Drawer.Screen name="Categoreis" component={Categoreis} />
      <Drawer.Screen name="TodoApp" component={TodoApp} />
    </Drawer.Navigator>
    {/* <View style={styles.container}>
      <Text>MealDetails</Text>
      <Button title ="home" onPress={()=>navigation.popToTop()}/>
      <Button title ="TODO App" onPress={()=>navigation.navigate("todo")}/>
    </View> */}
  </>
   
  )
}
export default MealDetails 
const styles = StyleSheet.create({
    container:{
        flex: 1,justifyContent:"center",alignItems:"center"
    }
})