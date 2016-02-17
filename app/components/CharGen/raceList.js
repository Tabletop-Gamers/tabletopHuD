'use strict'

import React, { Component, View, Text, StyleSheet, ListView, TouchableOpacity, Image } from 'react-native'
import {Actions} from 'react-native-router-flux'
import colors from '../../assets/constants/colors'


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
            <View style={styles.selectedRowContent}>
              <View style={{flexDirection: 'row', backgroundColor: colors.primary}}>
                  <Text style={styles.selectedRow}>{row.name}</Text>
                  <TouchableOpacity onPress={() => {
                    Actions.selectAtr()
                    actions.changeView('Attributes')
                  }}>
                    <Image style={styles.check} source={require('../../assets/img/check.png')}/>
                  </TouchableOpacity>
              </View>
              <Text style={styles.selectedText}>{row.description}</Text>
              <Text>Racial Bonus: {row.bonus}</Text>
                <Text>Languages Known: {row.languages}</Text>
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
    let races = this.props.races
    let dataSource = ds.cloneWithRows(races)
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
    justifyContent: 'center',
    color: colors.selectedText,
    padding: 6,
    flex: 1,
    alignItems: 'flex-start',
  },
  selectedRowContent: {
    backgroundColor: colors.selected
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
    height: 60,
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    color: colors.text,
    alignItems: 'center',
    padding: 6
  },
  separator: {
    height: 1,
    backgroundColor: colors.primary
  },
})
