'use strict'

import React, { Component, View, Text, StyleSheet, ListView, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class ClassList extends Component {

  constructor(props) {
    super(props)
  }

  _renderRow(row) {
    let selected = this.props.selectedClass
    let actions = this.props.actions
    if (row.name ===  selected) {
      row = (
            <View style={styles.selectedRow}>
            <TouchableOpacity onPress={() => {
              Actions.selectRace()
              actions.changeView('Race')
            }}>
              <Text style={styles.rows}>{row.name}</Text>
                <Text style={styles.selectedText}>{row.description}</Text>
                <Text>Roles: {row.role}</Text>
                <Text>Primary Stat: {row.keyatr[0]}</Text>
            </TouchableOpacity>
            </View>
            
            )
    } else {
      let atr = row.keyatr
      let name = row.name
      row = (
        <TouchableOpacity onPress={(e) => {
          actions.selectClass({name: name, atr: atr})
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
    backgroundColor: '#b6b6b6'
  },
  selectedText: {
    color: '#747274'
  },
  rows: {
    fontSize: 25,
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#747274',
    justifyContent: 'center',
    color: "#b6b6b6",
    alignItems: 'center',
    padding: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#5A575A"
  },
})
