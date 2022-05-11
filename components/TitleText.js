import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
export default function TitleText(props) {
  return (
      <Text style={{...styles.titleText,...props?.style}}>{props.children}</Text>
  )
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:39,
    }
})