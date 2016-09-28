
const initialState = {
  count: undefined,
}

export default function moduleName(state=initialState, action = {}){

  if(action.type === 'DETAIL_SET_STATE'){
    return {
      ...state,
      ...action,
    }
  }

  if(action.type === 'DETAIL_RESET_TO_INITIAL_STATE'){
    return initialState
  }

  return state;
}
