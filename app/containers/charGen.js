'use strict';

import React, { Component, View, Text, StyleSheet, Image } from 'react-native';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class CharGen extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {state, actions} = this.props
    return (
      <NavBar />
      <ClassList />
      <BottomBar />
      )
  }
}


export default connect(state => ({
    state: {}
  }),
  (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(CharGen);