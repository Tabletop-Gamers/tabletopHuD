'use strict'

import React, { Component, View, Text, StyleSheet, Image } from 'react-native'

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.menu}
        source={require('../assets/img/menu.png')}/>
      </View>
      )
  }
}

let styles = StyleSheet.create({
  container: {
  },
  menu: {
    marginTop: 20,
    marginLeft: 5
  }
})