import React, { Component, View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import colors from '../../assets/constants/colors'
import {Actions} from 'react-native-router-flux'



export default class FeatView extends Component {

  render() {
    let {selectedClass, selectedRace, actions} = this.props
    let maxFeats = 1
    if (selectedClass.name === 'Fighter') {
      maxFeats++
    }
    if (selectedRace === 'Human') {
      maxFeats++
    }

    return (
        <View>
          <Text>
          You have a max of {maxFeats} feats
          </Text>
          <Text>
          Current Feats:
          </Text>
          
          <Text>
          Enter a feat:
          </Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TextInput style={styles.inputBox}/>
          <TouchableOpacity>
            <Image source={require('../../assets/img/add.png')} />
          </TouchableOpacity>
          </View>
        </View>
      )
  }
}

let styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    height: 30,
    width: 160,
    borderWidth: 1
  }
})