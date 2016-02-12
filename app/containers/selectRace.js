'use strict';

import React, { Component, View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import NavBar from '../components/navbar'
import BottomBar from '../components/CharGen/bottombar'
import RaceList from '../components/CharGen/raceList'

class SelectClass extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {selectedClass, racial, classAtr, selectedRace, actions} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <NavBar />
        </View>
        <RaceList selectedClass={selectedClass} selectedRace={selectedRace} actions={actions} />
        <BottomBar racial={racial} classAtr={classAtr} />
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
function mapStateToProps(state) {
  return {
    selectedClass: state.UI.selectedClass,
    selectedRace: state.UI.selectedRace,
    currentView: state.UI.currentView,
    racial: state.UI.racial,
    classAtr: state.UI.classAtr
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectClass);