import React, { Component, View, Text, StyleSheet, ListView, TouchableOpacity, Image } from 'react-native'
import colors from '../../assets/constants/colors'
import {Actions} from 'react-native-router-flux'



export default class SkillHeader extends Component {

  render() {
    let {selectedClass, selectedStats, actions, skillPointsUsed, selectedSkills} = this.props
    let int = selectedStats.reduce((prev, stat) => {
      return stat.name === 'Int' ? stat.mod : prev
    })
    maxSkill = selectedClass.skillMod + int
    let view = null
    if (maxSkill - skillPointsUsed === 0) {
      view = (
        <View>
        <TouchableOpacity onPress={() => {
          Actions.selectFeat()
          actions.changeView('Feats')
        }}>
        <Text style={styles.confirmBtn}> CONFIRM </Text>
        </TouchableOpacity>
        </View>
        )
    }
    return (
        <View style={{flexDirection: 'row'}}>
          <Text>Skill Points Available: {maxSkill-skillPointsUsed} </Text>
          {view}
        </View>
      )
  }
}

let styles = StyleSheet.create({
  confirmBtn: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 10

  },
})