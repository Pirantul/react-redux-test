const initialState = {
    inputTask: "",
    editedTaskId: null,
    tasks: [
      {
        id: "shdjdfk23",
        value: "one"
      },
      {
        id: "ddamdk",
        value: "two"
      }
    ]
  };
  
  const reducer = (state = initialState, action) => {
    let newTasks = state.tasks;
    switch (action.type) {
      case "ADD_TASK":
        newTasks.push(action.payload);
        return {
          ...state,
          inputTask: "",
          tasks: newTasks
        };
      case "CHANGE_INPUT_FIELD":
        return {
          ...state,
          inputTask: action.payload
        };
      case "DELETE_TASK":
        newTasks = newTasks.filter((item) => {
          return item.id !== action.payload;
        });
        return {
          ...state,
          tasks: newTasks
        };
      case "EDIT_TASK":
        return {
          ...state,
          editedTaskId: action.payload
        };
      case "INPUT_TASK": {
        const { id, value } = action.payload;
  
        const editedTasks = newTasks.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              value
            };
          }
          return item;
        });
        return {
          ...state,
          tasks: editedTasks
        };
      }
      default:
        return state;
    }
  };
  
  export default reducer;
  