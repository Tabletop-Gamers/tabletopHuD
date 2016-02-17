'use strict';

import React, { Component, View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import NavBar from '../components/navbar'
import BottomBar from '../components/CharGen/bottombar'
import RaceList from '../components/CharGen/raceList'
import colors from '../assets/constants/colors'


class SelectClass extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {selectedClass, racial, classAtr, selectedRace, currentView, attributes, races, actions} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <NavBar currentView={currentView} actions={actions}/>
        </View>
        <RaceList selectedClass={selectedClass} races= {races} selectedRace={selectedRace} actions={actions} />
        <BottomBar racial={racial} attributes={attributes} classAtr={classAtr} />
      </View>
      )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary
  },
  header: {
    height: 60,
    backgroundColor: colors.primary,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 2
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