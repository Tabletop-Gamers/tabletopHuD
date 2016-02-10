'use strict'

import React, { Component, View, Text, StyleSheet, ListView, TouchableOpacity } from 'react-native'

export default class RaceList extends Component {

  _selectRow(cls) {
    this.selected = cls
  }

  _renderRow(row) {
    let selected = 'Human'
    if (row.name ===  selected) {
      row = (<View style={styles.selectedRow}>
              <Text style={styles.rows}>{row.name}</Text>
              <Text style={styles.selectedText}>{row.description}</Text>
              <Text>Racial Bonus: {row.bonus}</Text>
              <Text>Languages Known: {row.languages}</Text>
            </View>
            )
    } else {
      row = (
        <TouchableOpacity onPress={(e) => {
          selected= row.props.children.key

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
    let races = [{name: "Human", description: "Most humans are the descendants of pioneers, conquerors, traders, travelers, refugees, and other people on the move. As a result, human lands are home to a mix of people—physically, culturally, religiously, and politically different. Hardy or fine, light-skinned or dark, showy or austere, primitive or civilized, devout or impious, humans run the gamut.", bonus:"Extra feat, extra skills", languages: "Common"},
                {name: "Gnome", description: "I am short and useless", bonus:"Extra feat, extra skills"},
                {name: "Elf", description: "I am pretty and useless", bonus:"Extra feat, extra skills"}
                  ]
    let state = {
      dataSource: ds.cloneWithRows(races),
    }
    return (
     <ListView
      dataSource={state.dataSource}
      renderRow={this._renderRow}
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
