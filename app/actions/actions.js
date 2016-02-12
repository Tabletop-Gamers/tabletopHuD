export function changeView(view) {
  return {
    type: 'CHANGE_VIEW',
    data: view
  }
}

export function selectClass(cls) {
  return {
    type: 'SELECT_CLASS',
    data: cls
  }
}
export function selectRace(race) {
  return {
    type: 'SELECT_RACE',
    data: race
  }
}