const initialState = {inputTask: '', tasks: [{id:'shdjdfk23', value: 'one'}, {id:'ddamdk', value: 'two'}]}

const reducer = (state = initialState, action) => {
    console.log(action);
    console.log(state);
    let newTasks = state.tasks;
    switch (action.type) {
        case 'ADD_TASK':
            newTasks.push(action.payload)
            return {
                ...state,
                inputTask: '',
                tasks: newTasks
            }
        case 'CHANGE_INPUT_FIELD':
            return {
                ...state,
                inputTask: action.payload
            }
        case 'DELETE_TASK':
            console.log(newTasks);
            newTasks = newTasks.filter((item)=>{return item.id !== action.payload});
            return {
                ...state,
                inputTask: '',
                tasks: newTasks
            }
        default:
            return state;
    }
};
  
export default reducer;