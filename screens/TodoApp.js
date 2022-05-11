import { StyleSheet, Text, View, TextInput, Button, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import Card from '../components/Card'
import color from "../constants/color";
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import TodoList from '../components/TodoList'

const TodoApp = () => {
    const [todoWidth, setwidth] = useState( Dimensions.get("window").width * 0.8)
    const [todoList, setTodoLost] = useState([]);
    const [todoInput, setTodoInput] = useState("")
    const chnage = (value) => {
        setTodoInput(value)
    }
    const addList = () => {
        setTodoLost((prev) => {
            return [...prev, todoInput]
        })
        setTodoInput("")
    }
    useEffect(() => {
        const updateUi = () => {
            setwidth(Dimensions.get("window").width * 0.8)
        }
        Dimensions.addEventListener("change", updateUi)
        return () => {
            Dimensions.removeEventListener("change", updateUi)
        }
    })
    const remove=useCallback((v)=>{
        let newlist=   todoList.filter((cv,i)=>{
            if(i !== v){
                return cv
            }
          })
          if(newlist){
              setTodoLost(newlist)
          }
    },[todoList])
    return (<>
        <View style={{...styles.todo_wrapper,width:todoWidth}}>
            <View style={styles.input_wrapper}>
                <TextInput style={styles.input} value={todoInput} placeholder="Enter Todo List" onChangeText={chnage} />
            </View>
            <View>
                <MainButton title="ADD" onClick={addList} />
            </View>

        </View>
        <TodoList todoList={todoList} remove={remove}/>
    </>
    )
}

export default TodoApp

const styles = StyleSheet.create({
    todo_wrapper: {
        justifyContent: "center",
        display: 'flex',
        marginRight: "auto",
        marginLeft: "auto",
        padding: 9,
        marginTop: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        shadowColor: "#000",
        backgroundColor: "#ffff",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
    input_wrapper: {
        marginVertical: 20
    },

    input: {
        borderColor: "#efefef",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    }
})