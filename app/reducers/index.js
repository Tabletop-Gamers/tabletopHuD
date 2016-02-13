import intitialRules from '../assets/constants/initialRuleset'

export function UI(state = {
  selectedClass: null,
  currentView: 'launch',
  selectedRace: null,
  racial: [],
  classAtr: [],
  pointBuy: true,
  selectedStats: [],
  points: 15,
  pointsUsed: 0
}, action = null) {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return Object.assign({}, state, {currentView: action.data})
    case 'SELECT_CLASS':
      return Object.assign({}, state, {selectedClass: action.data.name, classAtr: action.data.atr})
    case 'SELECT_RACE':
      return Object.assign({}, state, {
        selectedRace: action.data.name,
        racial: action.data.racial
      })
    case 'SELECT_STAT_SYSTEM':
      return Object.assign({}, state, {pointBuy: action.data})
    case 'SET_STATS':
      return Object.assign({}, state, {selectedStats: action.data})
    case 'SET_POINTS':
      return Object.assign({}, state, {points: action.data})
    case 'USE_POINTS':
      return Object.assign({}, state, {pointsUsed: state.pointsUsed + action.data})
    case 'RESET_POINTS':
      return Object.assign({}, state, {pointsUsed: 0})
    default:
      return state;
  }
}

export function Ruleset(state = intitialRules, action = null) {
  switch(action.type) {
    case 'SWITCH_SYSTEM':
      return Object.assign({}, state, {
        name: action.data.name,
        classes: action.data.classes,
        races: action.data.races,
        attributes: action.data.attributes})
    default:
      return state
  }
}