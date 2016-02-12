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
    const {selectedClass, classes, races, attributes, selectedRace, currentView, classAtr, racial, actions} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <NavBar currentView={currentView} actions={actions}/>
        </View>
        <ClassList selectedClass={selectedClass} classes={classes} actions={actions} />
        <BottomBar racial={racial} races={races} attributes={attributes} classAtr={classAtr} />
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
    classAtr: state.UI.classAtr,
    classes: state.Ruleset.classes,
    attributes: state.Ruleset.attributes,
    races: state.Ruleset.races
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectClass);