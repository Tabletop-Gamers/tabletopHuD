'use strict'

import React, { Component, View, Text, StyleSheet } from 'react-native'

export default class BottomBar extends Component {
  render() {
    let selected = []
    let racial = []
    let attributes = ['Str', 'Dex', 'Con', 'Wis', 'Int', 'Cha']
    let index = 1
    return (
      <View style={styles.container}>
        {attributes.map((atr) => {
          if (selected.indexOf(atr) !== -1){
            return (
              <View key={index++}style={styles.box}>
                  {racial.map((bonus)=> {
                    if(bonus.name === atr && bonus.mod > 0) {
                      return (
                        <View key={index++} style={styles.boxPlus}>
                          <Text style={{color: "#b6b6b6"}}>{bonus.mod}</Text>
                        </View>
                        )
                    } else if (bonus.name === atr) {
                      return (
                        <View key={index++} style={styles.boxMinus}>
                          <Text style={{color: "#b6b6b6"}}>{Math.abs(bonus.mod)}</Text>
                        </View>
                        )
                    }
                  })}
                <Text style={styles.selectText} key={atr}>{atr}</Text>
              </View>
              )
          } else {
            return (
                <View key={index++}style={styles.box}>
                  {racial.map((bonus)=> {
                    if(bonus.name === atr && bonus.mod > 0) {
                      return (
                        <View key={index++} style={styles.boxPlus}>
                          <Text style={{color: "#b6b6b6"}}>{bonus.mod}</Text>
                        </View>
                        )
                    } else if (bonus.name === atr) {
                      return (
                        <View key={index++} style={styles.boxMinus}>
                          <Text style={{color: "#b6b6b6"}}>{Math.abs(bonus.mod)}</Text>
                        </View>
                        )
                    }
                  })}
                <Text key={atr} style={styles.atrText}>{atr}</Text>
              </View>
              ) 
          }
        })}
      </View>
      )
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 0,
    backgroundColor: '#5A575A'
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boxMinus: {
    width: 10,
    height: 20,
    marginRight: -5,
    backgroundColor: 'red'    
  },
  boxPlus:{
    width: 10,
    height: 20,
    marginRight: -5,
    backgroundColor: 'green'
  },
  atrText: {
    margin: 4,
    textAlign: 'center',
    backgroundColor: '#747274',
    color: "#b6b6b6",
    width: 50,
    height: 20,
  },
  selectText: {
    width: 50,
    height: 20,
    margin: 4,
    textAlign: 'center',
    backgroundColor: '#b6b6b6',
    color: "#747274",
  }
})