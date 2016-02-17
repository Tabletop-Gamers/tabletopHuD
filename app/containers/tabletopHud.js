'use strict';

import React, { Component, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux'

import colors from '../assets/constants/colors'


class TabletopHud extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {state, actions} = this.props
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../assets/img/logo.png')}
        />
        <TouchableOpacity style={styles.logoBtn} 
        onPress={()=> {
            actions.changeView('Class')
            Actions.selectClass()
          }
        }>
          <Text style={styles.logotext}>
            Create a Character
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoBtn}>
          <Text style={styles.logotext}>
            Game Manager
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoBtn}>
          <Text style={styles.logotext}>
            Character Manager
          </Text>
        </TouchableOpacity>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.splash,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginTop: -20,
    height: 180,
    width: 160,
    marginBottom: 40
  },
  logotext: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20,
    color: colors.text
  },
  logoBtn: {
    alignItems: 'center',
    marginTop: 20,
    width: 200,
    height: 40,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    borderBottomWidth: 2
  }
})

function mapStateToProps(state) {
  return {
    selectedClass: state.UI.selectedClass,
    selectedRace: state.UI.selectedRace,
    currentView: state.UI.currentView
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TabletopHud);