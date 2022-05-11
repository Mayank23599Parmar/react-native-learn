import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TitleText from './TitleText'

export default function Header(props) {
    return (
        <View style={styles.header_wrapper}>
            <TitleText style={styles.title}>{props.title}</TitleText>
        </View>
    )
}

const styles = StyleSheet.create({
    header_wrapper: {
        width: '100%',
        height: 50,
        backgroundColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
            },
    title: {
        color: "#000",
        textAlign:"center",
        textTransform:"uppercase",
        fontFamily:"Macondo-Regular",
        fontSize:22
    }
})