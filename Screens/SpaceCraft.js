import * as React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export default class SpaceCraft extends React.Component{

  render(){
    return(
      <View style={styles.view1}>
      <Text style={styles.hstext}> Crafting Space</Text>
      </View>
    );
  }

}

const styles= StyleSheet.create({

  hstext:{
    fontFamily: 'Georgia',
    fontSize: 20,
    justifyContent: 'center',
    color: 'black'
  },
  view1:{
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
})