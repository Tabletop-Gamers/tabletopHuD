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

export function pointBuy(bool) {
  return {
    type: 'SELECT_STAT_SYSTEM',
    data: bool
  }
}

export function setStats(stats) {
  return {
    type: 'SET_STATS',
    data: stats
  }
}

export function setPoints(points) {
  return {
    type: 'SET_POINTS',
    data: points
  }
}
export function usePoints(points) {
  return {
    type: 'USE_POINTS',
    data: points
  }
}