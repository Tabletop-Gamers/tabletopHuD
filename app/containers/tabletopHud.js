'use strict';

import React, { Component, View, Text, StyleSheet } from 'react-native';
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
        <Text>
        Dev it up
        </Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default connect(state => ({
    state: {}
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(TabletopHud);