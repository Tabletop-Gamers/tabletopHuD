'use strict'

import React, { Component, View, Text, StyleSheet, ListView, TouchableOpacity, Image } from 'react-native'
import {Actions} from 'react-native-router-flux'
import colors from '../../assets/constants/colors'


export default class ClassList extends Component {

  constructor(props) {
    super(props)
  }

  resetSkills() {
    let {actions, selectedClass, selectedStats, selectedSkills, skills} = this.props
    let defaultSkills = skills.map((skill) => {
      let mod = 0
      let classSkill = false
      selectedStats.forEach((stat) => {
        if(stat.name === skill.keyStat) {
          mod = mod + stat.mod
        }
      })
      selectedClass.classSkills.forEach((x) => {
        if (x === skill.name) {
          classSkill = true
        }
      })
      return {name: skill.name, ranks: 0, keyStat: skill.keyStat, statMod:mod, classSkill: classSkill, description: skill.description }
    })
    actions.setSkills(defaultSkills)
  }

  changeSkill(skill, value) {
    let {actions, selectedSkills, selectedClass} = this.props
    let newSkill = selectedSkills.map((sl) => {
      if (skill === sl.name) {
        return {name: sl.name, ranks: value, keyStat: sl.keyStat, statMod: sl.statMod, classSkill: sl.classSkill, description: sl.description }
      } else {
        return {name: sl.name, ranks: sl.ranks, keyStat: sl.keyStat, statMod: sl.statMod, classSkill: sl.classSkill, description: sl.description } 
      }
    })
    actions.setSkills(newSkill)
  }

  componentDidMount() {
    if (this.props.selectedSkills.length === 0) {
      this.resetSkills()
    }
  }

  _renderRow(row) {
    let {actions, selectedStats, highlightSkill, selectedClass, skillPointsUsed} = this.props
    
    let mod = selectedStats.reduce((prev, stat) => {
              prev = stat.name === row.keyStat ? stat.mod : prev
              return prev
              }, '') 
                

      let name = row.name
      let isClass = row.classSkill
      let ranks = row.ranks
      let description = row.description
    if (row.name === highlightSkill) {
      row = (
         <View style={styles.selectedRowContent}>
            <View style={{flexDirection: 'row', backgroundColor: colors.primary}}>
              <Text style={styles.selectedRow}>{name} ({row.keyStat})</Text>
              <Text style={{color: colors.selectedText, fontSize: 15}}>Mod: {+mod + row.ranks} RANKS: {row.ranks}</Text>
            </View>
          <View style={styles.selectedRowContent}>
          <Text> {row.description} </Text>
          </View>
          <View style={{flexDirection: 'row', backgroundColor: colors.selected}}>
            <TouchableOpacity style={styles.check} onPress={() => {
              let cost = isClass ? 1 : 2
              let maxRank = isClass ? 4 : 2
              if(this.maxSkill - skillPointsUsed - cost >= 0 && ranks < maxRank) {
                this.changeSkill(name, ranks+1)
                actions.useSkillPoints(cost)
              }
            }
          }>
            <Image source={require('../../assets/img/add.png')}style={styles.btn}/>
          </TouchableOpacity>  
          <TouchableOpacity style={{marginBottom: 5,
    marginRight: 10}} onPress={() => {
            if (ranks > 0) {
              this.changeSkill(name, ranks-1)
              isClass ? actions.useSkillPoints(-1) : actions.useSkillPoints(-2)
            }
          }}>
            <Image source={require('../../assets/img/minus.png')}style={styles.btn}/>
          </TouchableOpacity>
          </View>
          </View>
        )
    } else {
      row = (
            <TouchableOpacity onPress={()=>actions.selectSkill(name)}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.rows}>{name} ({row.keyStat})</Text>
            <Text style={{fontSize: 15}}>Mod: {+mod + row.ranks} RANKS: {row.ranks}</Text>
          </View>
            </TouchableOpacity>
        )
    }
    return (
        <View>
        {row}
        </View>
          )
  }
  render() {
    let {actions, skills, selectedClass, selectedStats, skillPointsUsed, selectedSkills} = this.props
    let int = selectedStats.reduce((prev, stat) => {
      return stat.name === 'Int' ? stat.mod : prev
    })
    this.maxSkill = selectedClass.skillMod + int
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => {
      return r1.ranks !== r2.ranks}});
    return (
     <ListView
      dataSource={ds.cloneWithRows(selectedSkills)}
      renderRow={this._renderRow.bind(this)}
      renderSeparator={(section, row) => <View key={`${row}`} style={styles.separator} />}
    />
      )
  }
}
let styles = StyleSheet.create({
  
  title: {
    paddingTop: 24,
    padding: 10,
    fontSize: 20,
  }, 
  selectedRow: {
    height: 60,
    fontSize: 25,
    color: colors.selectedText,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: 6,
    flex: 1,
    alignItems: 'flex-start'
  },
  selectedRowContent: {
    backgroundColor: colors.selected,
    flex: 1
  },
  selectedText: {
    color: '#747274'
  },
  check: {
    alignItems: 'flex-end',
    flex: 1,
    marginBottom: 5,
    marginRight: 10
  },
  rows: {
    fontSize: 25,
    height: 50,
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    color: colors.text,
    padding: 6,
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: colors.primary
  },
})
