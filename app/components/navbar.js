'use strict'

import React, { Component, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() =>Actions.pop()}>
          <Text style={styles.back}>
            Back
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Actions.launch()}>
          <Text style={styles.home}>
            Home
          </Text>
        </TouchableOpacity>
      </View>
      )
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  back: {
    marginTop: 20,
    marginLeft: 5,
    fontSize: 20,
    color: "#b6b6b6",
  },
  home: {
    marginTop: 20,
    marginLeft: 5,
    alignItems: 'flex-end',
    fontSize: 20,
    color: "#b6b6b6",
  }
})