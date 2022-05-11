import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/TodoApp';
import * as Font from "expo-font"
import AppLoading from 'expo-app-loading';
const fetchFonts=()=>{
  return Font.loadAsync({
    "Macondo-Regular":require('./assest/Macondo-Regular.ttf')
  })
}
export default function App() {
  const [appLoaded,setAppLoaded]=useState(false)

  if(!appLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setAppLoaded(true)} onError={(err)=>console.log(err)}/>
  }
  return (
    <View style={styles.container}>
     <Header title="TODO APP" />
     <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
