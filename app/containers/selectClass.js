'use strict';

import React, { Component, View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import NavBar from '../components/navbar'
import BottomBar from '../components/CharGen/bottombar'
import ClassList from '../components/CharGen/classList'
import RaceList from '../components/CharGen/raceList'

class SelectClass extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {selectedClass, selectedRace, currentView, actions} = this.props
    let view = currentView
    if (currentView === 'class') {
      view = <ClassList selectedClass={selectedClass} actions={actions} />
    } else if (currentView === 'race') {
      view = <RaceList selectedRace={selectedRace} actions={actions} />
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <NavBar />
        </View>
        <ClassList selectedClass={selectedClass} actions={actions} />
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
function mapStateToProps(state) {
  return {
    selectedClass: state.UI.selectedClass,
    selectedRace: state.UI.selectedRace,
    currentView: state.UI.currentView
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectClass);