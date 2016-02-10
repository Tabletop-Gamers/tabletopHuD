'use strict';

import React, { Component, View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import NavBar from '../components/navbar'
import BottomBar from '../components/CharGen/bottombar'
import ClassList from '../components/CharGen/classList'

class CharGen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {state, actions} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <NavBar />
        </View>
        <ClassList />
        <BottomBar />
      </View>
      )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#747274'
  },
  header: {
    height: 60,
    backgroundColor: "#5A575A"
  }
})

export default connect(state => ({
    state: {}
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(CharGen);