import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
export default function MainButton(props) {
  return (
      <Button title={ props.title } color={props.color} onPress={props.onClick}/>
  )
}
