import { StyleSheet, Text, View, Dimensions, ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'



function TodoList({ todoList ,remove}) {
    const [todoWidth, setwidth] = useState( Dimensions.get("window").width * 0.8);
    console.log("first")
    useEffect(() => {
        const updateUi = () => {
            setwidth(Dimensions.get("window").width * 0.8)
        }
        Dimensions.addEventListener("change", updateUi)
        return () => {
            Dimensions.removeEventListener("change", updateUi)
        }
    })
    return (
        <ScrollView style={{ marginTop: 10 }}>

            {
                todoList.map((cv, index) => {
                    return (
                        <TouchableOpacity activeOpacity={0.7} style={{ ...styles.list_wrapper, width: todoWidth }} key={index} onPress={()=>remove(index)} >
                            <Text style={styles.text} >{index + 1}. {cv}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>

    )
}
export default React.memo(TodoList)
const styles = StyleSheet.create({
    list_wrapper: {
        backgroundColor: "#eeeeee",
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 9,
        borderRadius: 10,
        padding: 5
    },
    text: {
        fontSize: 16,
        color: "#000",
        fontWeight: "600",
        padding: 10,
        marginBottom: 5,
    }
})