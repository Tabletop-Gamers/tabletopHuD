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

export function resetPoints() {
  return {
    type: 'RESET_POINTS'
  }
}

export function useSkillPoints(value) {
  return {
    type: 'SPEND_SKILL_POINTS',
    data: value 
  }
}
export function setSkills(skills) {
  return {
    type: 'SET_SKILLS',
    data: skills
  }
}
export function resetSkillPoints() {
  return {
    type: 'RESET_SKILL_POINTS'
  }
}
export function selectSkill(skill) {
  return {
    type: 'SELECT_SKILL',
    data: skill
  }
}

export function setDatasourceSkill(ds) {
  return {
    type: 'SET_DATASOURCE_SKILLS',
    data: ds
  }
}