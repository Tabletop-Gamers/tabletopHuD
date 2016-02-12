import React, { Component, Navigator } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'

import * as reducers from '../reducers/';
import TabletopHud from './tabletopHud';
import ClassList from '../components/CharGen/classList'
import BottomBar from '../components/CharGen/bottombar'
import SelectClass from './selectClass'
import SelectRace from './selectRace'
import SelectAtr from './selectAtr'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
         <Router hideNavBar={true}>
            <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
            <Route name="launch" component={TabletopHud} initial={true}/>
            <Route name='selectClass' component={SelectClass} />
            <Route name="selectRace" component={SelectRace} />
            <Route name="selectAtr" component={SelectAtr} />                     
         </Router>
      </Provider>
    );
  }
}

