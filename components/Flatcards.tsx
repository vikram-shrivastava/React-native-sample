import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards(){
  return (
    <View>
        <Text style={styles.headingText}>FlatCards</Text>
        <View style={styles.container}>
            <View style={[styles.Card,styles.Cardone]}>
              <Text>Red</Text>
            </View>
            <View style={[styles.Card,styles.Cardtwo]}>
              <Text>Green</Text>
            </View>
            <View style={[styles.Card,styles.Cardthree]}>
              <Text>Blue</Text>
            </View>
            <View style={[styles.Card,styles.Cardfour]}>
              <Text>Yellow</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:16,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container:{
        flex:1,
        flexDirection:'row',
        margin:5
    },
    Card:{
        width:100,
        height:100,
        borderRadius:4,
        margin:3,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    Cardone:{
        backgroundColor:'#EF5354'
    },
    Cardtwo:{
      backgroundColor:'#43A047'
    },
    Cardthree:{
      backgroundColor:'#0A79DF'   
    },
    Cardfour:{
      backgroundColor:'#F4C724'
    }
})