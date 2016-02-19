'use strict'

import React, { Component, View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native'
import {Actions} from 'react-native-router-flux'

import PointsBuy from './pointsBuy'
import RandomRoll from './randomRoll'
import colors from '../../assets/constants/colors'


export default class AttributeSelect extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let {selectedRace, selectedClass, actions } = this.props
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
        actions={this.props.actions}
        racial={this.props.racial}
        selectedStats={this.props.selectedStats}/>
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
        <Text style={styles.yourHero}>
          {selectedRace} {selectedClass.name}
        </Text>
        {view}
      </View>
      )
  }
}
let styles = StyleSheet.create({
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 6,
    borderBottomColor: colors.primary
  },
  subText: {
    textAlignVertical: 'center',
    alignItems: 'center',
    fontSize: 20,
    margin: 5,
    color: colors.text
  },
  yourHero: {
    textAlignVertical: 'center',
    fontSize: 30,
    textAlign: 'center',
    color: colors.text
  }
})
