export function UI(state = {
  selectedClass: null,
  currentView: 'launch',
  selectedRace: null
}, action = null) {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return Object.assign({}, state, {currentView: action.data})
    case 'SELECT_CLASS':
      return Object.assign({}, state, {selectedClass: action.data})
    case 'SELECT_RACE':
      return Object.assign({}, state, {selectedRace: action.data})
    default:
      return state;
  }
}