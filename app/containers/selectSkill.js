'use strict';

import React, { Component, View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import NavBar from '../components/navbar'
import BottomBar from '../components/CharGen/bottombar'
import SkillList from '../components/CharGen/skillList'
import SkillHeader from '../components/CharGen/skillHeader'

import colors from '../assets/constants/colors'


class SelectSkill extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {selectedStats, skills, actions, dataSource, highlightSkill, skillPointsUsed, currentView, racial, races, attributes, selectedClass, selectedSkills, classAtr} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <NavBar currentView={currentView} actions={actions}/>
        </View>
         <SkillHeader 
          actions={actions}
          selectedClass={selectedClass}
          selectedStats={selectedStats}
          skillPointsUsed={skillPointsUsed}
          selectedSkills={selectedSkills} />
        <SkillList 
          skills={skills}
          highlightSkill={highlightSkill}
          selectedStats={selectedStats}
          selectedSkills={selectedSkills}
          skillPointsUsed={skillPointsUsed}
          selectedClass={selectedClass}
          actions={actions}
          datasourceSkill={dataSource} />
        <BottomBar racial={racial} races={races} attributes={attributes} classAtr={classAtr} />
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
    classes: state.Ruleset.classes,
    attributes: state.Ruleset.attributes,
    races: state.Ruleset.races,
    skills: state.Ruleset.skills,
    classAtr: state.UI.classAtr,
    selectedStats: state.UI.selectedStats,
    skillPointsUsed: state.UI.skillPointsUsed,
    selectedSkills: state.UI.selectedSkills,
    highlightSkill: state.UI.highlightSkill,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SelectSkill);