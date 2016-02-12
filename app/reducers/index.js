export function UI(state = {
  selectedClass: null,
  currentView: 'launch',
  selectedRace: null,
  racial: [],
  classAtr: []
}, action = null) {
  switch (action.type) {
    case 'CHANGE_VIEW':
      return Object.assign({}, state, {currentView: action.data})
    case 'SELECT_CLASS':
    console.log(action.data)
      return Object.assign({}, state, {selectedClass: action.data.name, classAtr: action.data.atr})
    case 'SELECT_RACE':
      console.log(action.data)
      return Object.assign({}, state, {
        selectedRace: action.data.name,
        racial: action.data.racial
      })
    default:
      return state;
  }
}