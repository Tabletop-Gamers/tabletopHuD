'use strict'

import React, { Component, View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native'
import {Actions} from 'react-native-router-flux'

export default class PointsBuy extends Component {

  constructor(props) {
    super(props)
  }

  resetStat() {
    let {actions, attributes, racial } = this.props
      let defaultStat = attributes.map((atr) => {
            let value = 10
            racial.forEach((racial) => {
              if (racial.name === atr) {
                value = racial.mod + 10
              }
            })
            let mod = Math.floor((value-10) / 2)
            return {name: atr, value: value, mod: mod}
      })
      console.log(defaultStat)
      actions.setStats(defaultStat)
      actions.resetPoints()
  }

  componentDidMount() {
    this.resetStat()
  }

  render() {
    let {actions, selectedStats, attributes, points, pointsUsed, racial } = this.props
    let changeStat = function (atr, value) {
        let newStat = selectedStats.map((stat) => {
              if (stat.name === atr.name) {
                let mod = Math.floor((value-10) / 2)
                return {name: stat.name, value: value, mod: mod}
              } else {
                let mod = Math.floor((stat.value-10) / 2)
                return {name: stat.name, value: stat.value, mod: mod}
              }
            })
            actions.setStats(newStat)
      }
    let view = selectedStats.map((atr) => {
      let operator = null
      if(Math.floor((atr.value-10) / 2) > 0) {
        operator = '+'
      }  
      return (
        <View key={atr.name} style={styles.row}>
          <Text style={styles.atr}>{atr.name}: </Text>
          <Text style={styles.value}>{atr.value}</Text>
          <Text style={styles.mod}>Mod: {operator}{Math.floor((atr.value-10) / 2)} </Text>
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
      confirm = <Text style={styles.confirmTxt}>CONFIRM</Text>
    } else {
      confirm = null
    }
    return (
        <View style={styles.container}>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 10}}>
          <Text style={{color: '#b6b6b6'}}>
          Points Total:
          </Text>
          <TextInput style={styles.pointsInput} placeholder={points.toString()} keyboardType={'numeric'} maxLength={2} onChangeText={(value) => actions.setPoints(+value)} />
          <Text style={{color: '#b6b6b6'}}>
          Points Left:
          </Text>
          <Text style={{color: '#b6b6b6'}}>
          {points - pointsUsed}
          </Text>
        </View>
        {view}
        <View style={{flexDirection: 'row', marginTop: 15 }}>
          <TouchableOpacity style={styles.confirmBtn} onPress={() =>  {
                  Actions.selectSkill()
                  actions.changeView('Skills')
                }}>
              {confirm}
          </TouchableOpacity>
          <TouchableOpacity style={styles.resetBtn} onPress={this.resetStat.bind(this)}>
              <Text style={styles.resetText} >
              RESET
            </Text>
          </TouchableOpacity>
        </View>
        </View>
      )
  }
}
let styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
  },
  atr: {
    flex: 1,
    textAlign: 'left',
    alignItems: 'flex-start',
    fontSize: 30,
    marginLeft: 5,
    color: '#b6b6b6'

  },
  confirmBtn: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 10

  },
  pointsInput: {
    width: 50,
    height: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    marginLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    marginRight: 10,
    textAlign: 'center',
    fontSize: 10
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  btn: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10
  },
  value: {
    flex: 1,
    fontSize: 20,
    alignItems: 'center',
    color: '#b6b6b6'

  },
  mod: {
    flex: 1,
    alignItems: 'flex-end',
    color: '#b6b6b6'

  }, 
  resetBtn: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  resetText: {
    width: 80,
    height: 20,
    backgroundColor: 'red',
    textAlign: 'center',
    borderRadius: 10,
    color: '#b6b6b6',
    borderColor: '#5A575A'

  },
  confirmTxt: {
    width: 80,
    height: 20,
    backgroundColor: 'green',
    textAlign: 'center',
    borderRadius: 10,
    color: '#b6b6b6',
    borderColor: '#5A575A'


  }
})