'use strict'

import React, { Component, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'
import colors from '../assets/constants/colors'

export default class NavBar extends Component {
  render() {
    let currentView = this.props.currentView
    let actions = this.props.actions
    let previousView = currentView === "Race" ? "Class" : "Race" 
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.backBox} onPress={() => {
          Actions.pop()
          actions.changeView(previousView)
        }}>
          <Text style={styles.back}>
            Back
          </Text>
        </TouchableOpacity>
        <View style={styles.titleBox}>
        <Text style={styles.title}>
          {currentView}
        </Text>
        </View>
        <TouchableOpacity style={styles.homeBox}onPress={() => Actions.launch()}>
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
    flexDirection: 'row',
  },
  backBox: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 20,
    marginLeft: 5,
  },
  titleBox: {
    flex: 1,
    alignItems: 'center'
  },
  homeBox: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 20,
    marginRight: 5,
  },
  back: {

    fontSize: 20,
    color: colors.text,
  },
  home: {
  
    fontSize: 20,
    color: colors.text,
  },
  title: {
    marginTop: 20,
    marginLeft: 5,
    alignItems: 'center',
    fontSize: 20,
    color: colors.secondary,
  }
})