
const setCount = function(count){
  return {
    type: 'HOME_SET_COUNT',
    count
  };
};

export function increment() {
  return async (dispatch, getState) => {
    const { count } = getState().home;
    const newCount = count + 1;
    dispatch(setCount(newCount));
  };
}

export function decrementAsync() {

  return async (dispatch, getState) => {
    const { count } = getState().home;
    const newCount = count - 1;

    setTimeout(function(){
      dispatch(setCount(newCount));
    },1000);

  };
}

export function goToDetail(params){
  const {
    onNavigate
  } = params;

  return async (dispatch, getState) => {

    const { count } = getState().home;

    dispatch({
      type: 'DETAIL_SET_STATE',
      count,
    });

    onNavigate({
      type: 'push',
      key: 'Detail'
    });
  };
}

