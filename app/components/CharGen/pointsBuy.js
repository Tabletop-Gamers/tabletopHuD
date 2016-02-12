'use strict'

import React, { Component, View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class PointsBuy extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let {actions, selectedStats, attributes, points, racial } = this.props
    if (selectedStats.length === 0) {
      let defaultStat = attributes.map((atr) => {
            let value = 10
            racial.forEach((racial) => {
              if (racial.name === atr) {
                value = racial.mod + 10
              }
            })
            return {name: atr, value: value}
      })
      actions.setStats(defaultStat)
    }
  }

  render() {
    let {actions, selectedStats, attributes, points, pointsUsed, racial } = this.props
    let changeStat = function (atr, value) {
        let newStat = selectedStats.map((stat) => {
              if (stat.name === atr.name) {
                return {name: stat.name, value: value}
              } else {
                return {name: stat.name, value: stat.value}
              }
            })
            actions.setStats(newStat)
      }
    let view = selectedStats.map((atr) => {
      return (
        <View key={atr.name} style={styles.row}>
          <Text style={styles.atr}>{atr.name}: </Text>
          <Text style={styles.value}>{atr.value}</Text>
          <Text style={styles.mod}>Mod: {Math.floor((atr.value-10) / 2)} </Text>
          <TouchableOpacity  onPress={() => {
            let cost = Math.max(Math.floor((atr.value-9) / 2), 1)
            if(points - (pointsUsed + cost) >= 0) {
              changeStat(atr, atr.value+1)
              actions.usePoints(cost)
            }
          }}>
            <Image source={require('../../assets/img/add.png')}style={styles.btn}/>
          </TouchableOpacity>  
          <TouchableOpacity onPress={() => {
            let cost = Math.max(Math.floor((atr.value - 10)/ 2), 1)
            changeStat(atr, atr.value-1)
            actions.usePoints(-cost)
          }}>
            <Image source={require('../../assets/img/minus.png')}style={styles.btn}/>
          </TouchableOpacity>
        </View>
        )
    })
    let confirm = null
    if (points - pointsUsed === 0) {
      confirm = <Text>Press Here to Confirm</Text>
    }
    return (
        <View style={styles.container}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text>
          Points Total:
          </Text>
          <TextInput style={styles.pointsInput} defaultValue={points.toString()} keyboardType={'numeric'} maxLength={2} onChangeText={(value) => actions.setPoints(+value)} />
          <Text>
          Points Left:
          </Text>
          <Text>
          {points - pointsUsed}
          </Text>
        </View>
        {view}
        {confirm}
        </View>
      )
  }
}
let styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10
  },
  atr: {
    flex: 1,
    textAlign: 'left',
    alignItems: 'flex-start',
    fontSize: 30,
    marginLeft: 5
  },
  pointsInput: {
    height: 20,
    width: 50,
    borderWidth: 1,
    textAlign: 'center',
    margin: 1
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    flex: 1,
    alignItems: 'flex-end'
  },
  value: {
    flex: 1,
    fontSize: 20,
    alignItems: 'center'
  },
  mod: {
    flex: 1,
    alignItems: 'flex-end'
  }
})