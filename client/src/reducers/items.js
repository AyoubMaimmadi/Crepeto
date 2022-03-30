const item = (state, action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return {
        id: action.id,
        name: action.name,
        qty: parseInt(action.qty, 10),
        unitCost: parseFloat(action.unitCost, 10),
        unitPrice: parseFloat(action.unitPrice, 10),
        selected: false
      }
    case 'EDIT_ITEM':
      if(action.id !== state.id) {
        return state
      }

      return {
        id: action.id,
        name: action.name,
        qty: parseInt(action.qty, 10),
        unitCost: parseFloat(action.unitCost, 10),
        unitPrice: parseFloat(action.unitPrice, 10),
        selected: false
      }
    case 'TOGGLE_SELECT_ITEM':
      if(action.id !== state.id) {
        return state
      }

      return {
        ...state,
        selected: !state.selected
      }
    default:
      return state
  }
}

export const items = (state = [], action) => {
  switch(action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        item(undefined, action)
      ]
    case 'REMOVE_ITEM':
      return state.filter(t => !t.selected )
    case 'TOGGLE_SELECT_ITEM':
    case 'EDIT_ITEM':
      return state.map(t => item(t, action))
    default:
      return state
  }
}

