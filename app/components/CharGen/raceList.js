'use strict'

import React, { Component, View, Text, StyleSheet, ListView, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class RaceList extends Component {

  constructor(props) {
    super(props)
  }

  _selectRow(cls) {
    this.selected = cls
  }

  _renderRow(row) {
    let selected = this.props.selectedRace
    let actions = this.props.actions
    if (row.name ===  selected) {
      row = (
            <View style={styles.selectedRow}>
              <Text style={styles.rows}>{row.name}</Text>
              <Text style={styles.selectedText}>{row.description}</Text>
              <Text>Racial Bonus: {row.bonus}</Text>
              <TouchableOpacity onPress={() => Actions.selectAtr()}>
              <Text>Languages Known: {row.languages}</Text>
              </TouchableOpacity>
            </View>
            )
    } else {
      let name = row.name
      let racial = row.racial
      row = (
        <TouchableOpacity onPress={() => {
          actions.selectRace({name: name, racial: racial})
        }}>
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
    let races = [{name: "Human", description: "Most humans are the descendants of pioneers, conquerors, traders, travelers, refugees, and other people on the move. As a result, human lands are home to a mix of people—physically, culturally, religiously, and politically different. Hardy or fine, light-skinned or dark, showy or austere, primitive or civilized, devout or impious, humans run the gamut.", bonus:"Extra feat, extra skills", languages: "Common", racial: []},
                {name: "Gnome", description: "I am short and useless", bonus:"Extra feat, extra skills", racial:[{name:'Str', mod: -2}, {name: "Con", mod: -2 }]},
                {name: "Elf", description: "I am pretty and useless", bonus:"Extra feat, extra skills", racial: []}
                  ]
    let state = {
      dataSource: ds.cloneWithRows(races),
    }
    return (
     <ListView
      dataSource={state.dataSource}
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
