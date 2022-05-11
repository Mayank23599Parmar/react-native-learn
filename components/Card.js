import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card(props) {
  return (
    <View style={{...styles.card,...props.style}}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
   card:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor:"#ffff",
   }
})