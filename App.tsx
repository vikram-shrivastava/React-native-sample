import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from "react-native"
import Flatcards from "./components/Flatcards";

const App=()=>{
  return(
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.mainheading}>
          Hello World! 
        </Text>
        <Flatcards/>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  mainheading:{
    fontSize:20,
    fontWeight:'bold',
    paddingHorizontal:3
  }
})
export default App