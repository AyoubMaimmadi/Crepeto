export const editItemDialog = (state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_EDIT_ITEM_DIALOG':
      return state = !state
    default:
      return state
  }
}
