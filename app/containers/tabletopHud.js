'use strict';

import React, { Component, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

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
        source={require('../assets/img/d20.jpg')}
      />
        <Text style={styles.logotext}>
        Tabletop HUD
        </Text>
        <TouchableOpacity style={styles.started}>
            <Image
              
              source={require('../assets/img/getStarted.png')} />
        </TouchableOpacity>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 160,
    width: 160
  },
  logotext: {
    paddingTop: 20,
    fontSize: 30
  },
  started: {
    width: 60,
    height: 60,
    paddingTop: 50
  }
})

export default connect(state => ({
    state: {}
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(TabletopHud);