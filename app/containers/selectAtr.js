'use strict';

import React, { Component, View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import NavBar from '../components/navbar'
import AttributeSelect from '../components/CharGen/attributeSelect'
import BottomBar from '../components/CharGen/bottombar'
import colors from '../assets/constants/colors'

class SelectAtr extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {selectedClass, racial, pointBuy, classAtr, pointsUsed, selectedRace, points, currentView, races, selectedStats, actions, attributes} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <NavBar currentView={currentView} actions={actions}/>
        </View>
        <AttributeSelect style={{flex: 2}}
         actions={actions}
         points={points}
         racial={racial}
         attributes={attributes}
         pointsUsed={pointsUsed}
         selectedStats={selectedStats}
         pointBuy={pointBuy}
         selectedClass={selectedClass}
         selectedRace={selectedRace}/>
        <View style={styles.bottom}>
        <BottomBar racial={racial} races={races} attributes={attributes} classAtr={classAtr} />
        </View>
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
  },
  bottom: {
    alignSelf: 'auto',
    flex: 3,
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
    races: state.Ruleset.races,
    pointBuy: state.UI.pointBuy,
    selectedStats: state.UI.selectedStats,
    points: state.UI.points,
    pointsUsed: state.UI.pointsUsed
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectAtr);