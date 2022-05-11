import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import textFont from "../constants/default_settings";
export default function BodyText(props) {
    return (
        <Text style={{...styles.bodyText,...props.style}}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    bodyText: {
        fontSize: 16,
        color: "#000",
        fontFamily:textFont.bodyText
    }
})