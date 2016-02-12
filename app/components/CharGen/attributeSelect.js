'use strict'

import React, { Component, View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

import PointsBuy from './pointsBuy'
import RandomRoll from './randomRoll'

export default class AttributeSelect extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let actions = this.props.actions
    let view = this.props.pointBuy ? 
      <PointsBuy 
        attributes={this.props.attributes}
        points={this.props.points} 
        selectedStats={this.props.selectedStats}
        actions={this.props.actions}
        racial={this.props.racial}
        pointsUsed={this.props.pointsUsed}/> 
    : <RandomRoll 
        attributes={this.props.attributes}
        actions={this.props.actions}/>
    return (
      <View>
        <View style={styles.subHeader}>
          <Text style={styles.subText}>
            Random Roll
          </Text>
          <Switch value={this.props.pointBuy} onValueChange={(value) => actions.pointBuy(value)}/>
          <Text style={styles.subText}>
            Point Buy
          </Text>
        </View>
        {view}
      </View>
      )
  }
}
let styles = StyleSheet.create({
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 3,
  },
  subText: {
    textAlignVertical: 'center',
    alignItems: 'center',
    fontSize: 20,
    margin: 5
  }
})
