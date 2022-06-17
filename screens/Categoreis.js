import { StyleSheet, Text, View, Button, Image, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import useFechSectionData from '../hooks/useFechSectionData'
function Categoreis({ navigation }) {
  let sectionsOvj = {
    "rich-text": "16554824100e530ed7",
    "home-slider": "1655482523a36b1b66"
  }
  const { isLoading, pageData, error}=useFechSectionData(sectionsOvj)
  console.log(isLoading)
  console.log(pageData)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });

  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* {
            pageData?.blocks?.map((cv, index) => {
              let src = `https:${cv.image}`
              console.log(src)
              return <Image
                key={index}
                style={styles.logo}
                source={{ uri: src }}
              />
            })
          } */}

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default Categoreis;
const styles = StyleSheet.create({

  container: {
    flex: 1,

  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  logo: {
    width: 300,
    height: 300,
  }
})