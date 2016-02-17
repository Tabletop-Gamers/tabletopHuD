import React, {Component, Text, View, StyleSheet} from 'react-native'
import {bindActionCreators} from 'redux'
import * as actions from '../actions/actions'
import { connect } from 'react-redux'
import NavBar from '../components/navbar'
import FeatView from '../components/CharGen/featView'



class SelectFeat extends Component {

  render() {
    const {currentView, actions, current, selectedClass, selectedRace} = this.props
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <NavBar currentView={currentView} actions={actions}/>
        </View>
        <FeatView selectedClass={selectedClass} selectedRace={selectedRace}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(SelectFeat);