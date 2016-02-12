'use strict'

import React, { Component, View, Text, StyleSheet, ListView, TouchableOpacity, Image } from 'react-native'
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
            <View style={styles.selectedRowContent}>
                <View style={{flexDirection: 'row', backgroundColor: '#5A575A'}}>
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
    fontSize: 25,
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#5A575A',
    color: "#b6b6b6",
    padding: 6,
    flex: 1,
    alignItems: 'flex-start'
  },
  selectedRowContent: {
    backgroundColor: '#b6b6b6',
    flex: 1
  },
  selectedText: {
    color: '#747274'
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
    backgroundColor: '#747274',
    color: "#b6b6b6",
    padding: 6
  },
  separator: {
    height: 1,
    backgroundColor: "#5A575A"
  },
})
