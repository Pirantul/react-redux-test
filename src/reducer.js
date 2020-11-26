const reducer = (state = '', action) => {
    console.log(action);
    if (action.type === 'SET_ACTIVE_ITEM') {
        return action.value;
    } else {
        return state;
    }
  };
  
  export default reducer;