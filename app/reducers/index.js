import intitialRules from '../assets/constants/initialRuleset'

export function UI(state = {
  selectedClass: {name: null, atr: null, skillMod: null},
  currentView: 'launch',
  selectedRace: null,
  racial: [], 
  classAtr: [],
  pointBuy: true,
  selectedStats: [],
  points: 15,
  pointsUsed: 0,
  skillPointsUsed: 0,
  selectedSkills: [],
  highlightSkill: '',
  datasourceSkill: [{name: null}]
}, action = null) {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return Object.assign({}, state, {currentView: action.data})
    case 'SELECT_CLASS':
      return Object.assign({}, state, {selectedClass: action.data, classAtr: action.data.atr})
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
    case 'SPEND_SKILL_POINTS':
      return Object.assign({}, state, {skillPointsUsed: state.skillPointsUsed+action.data})
    case 'RESET_SKILL_POINTS':
      return Object.assign({}, state, {skillPointsUsed: 0})
    case 'SET_SKILLS':
      return Object.assign({}, state, {selectedSkills: action.data})
    case 'SELECT_SKILL':
      return Object.assign({}, state, {highlightSkill: action.data})
    case 'SET_DATASOURCE_SKILLS':
      return Object.assign({}, state, {datasourceSkill: action.data})
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