import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web'

const newpostscreen = () => {
  return (
    <SafeAreaView style={{backgroundColor:'black',flex:1}}>
      <AddNewPost />
    </SafeAreaView>
  )
}

export default newpostscreen