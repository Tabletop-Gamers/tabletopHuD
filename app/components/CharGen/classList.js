'use strict'

import React, { Component, View, Text, StyleSheet, ListView, TouchableOpacity, Image } from 'react-native'
import {Actions} from 'react-native-router-flux'
import colors from '../../assets/constants/colors'

export default class ClassList extends Component {

  constructor(props) {
    super(props)
  }

  _renderRow(row) {
    let selected = this.props.selectedClass
    let actions = this.props.actions
    if (row.name ===  selected.name) {
      row = (
            <View style={styles.selectedRowContent}>
                <View style={{flexDirection: 'row', backgroundColor: colors.primary}}>
                  <Text style={styles.selectedRow}>{row.name}</Text>
                  <TouchableOpacity onPress={() => {
                    Actions.selectRace()
                    actions.changeView('Race')
                  }}>
                    <Image style={styles.check} source={require('../../assets/img/check.png')}/>
                  </TouchableOpacity>
                </View>
                <Text style={styles.selectedText}>{row.description}</Text>
                <Text>Roles: {row.role}</Text>
                  <Text>Primary Stat: {row.keyatr[0]}</Text>
            </View>
            
            )
    } else {
      let atr = row.keyatr
      let name = row.name
      let skill = row.skillMod
      let classSkill = row.classSkills
      row = (
        <TouchableOpacity onPress={(e) => {
          actions.selectClass({name: name, atr: atr, skillMod: skill, classSkills: classSkill})
        }
        }>
        <Text key={row.name} style={styles.rows}>{row.name}</Text>
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
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let classes = this.props.classes
    let dataSource = ds.cloneWithRows(classes)
    return (
     <ListView
      dataSource={dataSource}
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
    fontSize: 25,
    height: 60,
    flexDirection: 'row',
    backgroundColor: colors.primary,
    color: colors.selectedText,
    padding: 6,
    flex: 1,
    alignItems: 'flex-start'
  },
  selectedRowContent: {
    backgroundColor: colors.selected,
    flex: 1
  },
  selectedText: {
    color: colors.text
  },
  check: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 15,
    marginRight: 10
  },
  rows: {
    fontSize: 25,
    height: 50,
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    color: colors.text,
    padding: 6
  },
  separator: {
    height: 1,
    backgroundColor: colors.primary
  },
})
