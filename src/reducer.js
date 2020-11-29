const initialState = {inputTask: '', tasks: ['one', 'two']}

const reducer = (state = initialState, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case 'ADD_TASK':
            const newTasks = state.tasks;
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
        default:
            return state;
    }
};
  
export default reducer;