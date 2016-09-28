
const initialState = {
  count: 0
}

export default function moduleName(state=initialState, action = {}){

  if(action.type === 'HOME_SET_COUNT'){
    return {
      ...state,
      count: action.count
    }
  }

  return state;
  
}
