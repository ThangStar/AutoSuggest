import { Button, FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const data = [
  "apple",
  "samsung",
  "sony",
  "nokia",
  "huawei",
  "htc"
]
var dataTarget = [

]

const App = () => {
  const [value, setValue] = useState('')
  return (
    <SafeAreaView>
      <View style={{
        justifyContent: 'center',
        paddingVertical: 100,
        paddingHorizontal: 12
      }}>
        <TextInput
          value={value}
          style={{
            borderWidth: 1
          }}
          onChangeText={(text) => {
            setValue(text)
            dataTarget = []
            for (var i = 0; i < data.length; i++) {
              if (data[i].includes(text)) {
                dataTarget.push(data[i])
              }
            }
          }} />
        {
          dataTarget.map((item) => {
            return (
              <ItemSuggest suggest = {item} />
            )
          })
        }
        <View style={{
          marginTop: 40
        }}>

        </View>
      </View>

    </SafeAreaView>
  )
}

const ItemSuggest = (props) => {
  let { suggest } = props
  return (
    <View style={{
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderColor: '#F62F63',
      borderWidth: 1,
      backgroundColor: '#f62f6431',
      marginVertical: 1,
      borderRadius: 12
    }}>
      <Text>{suggest}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})