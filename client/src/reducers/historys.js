export const history = (state, action) => {
  switch(action.type) {
      case 'ADD_HISTORY':
        return {
          id: action.id,
          name: action.name,
          qty: parseInt(action.qty, 10),
          status: action.status,
          date: action.date,
        }
    default:
      return state
  }
}

export const historys = (state = [], action) => {
  switch(action.type) {
    case 'ADD_HISTORY':
      return [
        ...state,
        history(undefined, action)
      ]
    default:
      return state
  }
}
