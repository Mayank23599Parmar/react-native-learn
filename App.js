import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/TodoApp';
import * as Font from "expo-font"
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Categoreis from './screens/Categoreis';
import CategoresMeal from './screens/CategoresMeal';
import MealDetails from './screens/MealDetails';
const Stack = createNativeStackNavigator()
const fetchFonts = () => {
  return Font.loadAsync({
    "Macondo-Regular": require('./assest/Macondo-Regular.ttf')
  })
}
export default function App() {
  const [appLoaded, setAppLoaded] = useState(false)
  const screensOptions = {
    headerStyle: {
      backgroundColor: "#EC994B"
    },
    headerTintColor: "#15133C",
    headerTitleAlign: "left",
    headerTitleStyle: {
      fontWeight: "500",
      color:"#15133C"
    },
    headerTransparent:false,
    headerBlurEffect:"extraLight",
    animation:"fade_from_bottom",
    
  }
  if (!appLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setAppLoaded(true)} onError={(err) => console.log(err)} />
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={screensOptions} >
        <Stack.Screen name='Home' options={{ title: "Home" }} component={Categoreis} />
        <Stack.Screen name='Meals' component={CategoresMeal} options={
          {
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            )
          }
        } />
        <Stack.Screen name='todo' component={StartGameScreen} options={{title:"TODO"}} />
        <Stack.Screen name='Details' component={MealDetails} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
