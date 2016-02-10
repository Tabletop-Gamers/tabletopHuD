'use strict'

import React, { Component, View, Text, StyleSheet, ListView } from 'react-native'

export default class ClassList extends Component {

  render() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let classes = [{name: 'Fighter', description: "I FIGHT SHIT", keyatr: "Str"}, 
          {name: 'Ranger', description: "I shoot shit", keyatr: "Dex"},
          {name: 'Cleric', description: "I shoot shit", keyatr: "Wis"},
          {name: 'Rogue', description: "I shoot shit", keyatr: "Dex"},
          {name: 'Wizard', description: "I shoot shit", keyatr: "Int"},
          {name: 'Sorcerer', description: "I shoot shit", keyatr: "Int"},
          {name: 'Monk', description: "I shoot shit", keyatr: "Dex"},
          {name: 'Druid', description: "I shoot shit", keyatr: "Wis"},
          {name: 'Bard', description: "I shoot shit", keyatr: "Cha"},
          {name: 'Paladin', description: "I shoot shit", keyatr: "Str"}]
    let state = {
      dataSource: ds.cloneWithRows(classes),
    }
    return (
     <ListView
      dataSource={state.dataSource}
      renderRow={(row) => <Text style={styles.rows}>{row.name}</Text>}
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
