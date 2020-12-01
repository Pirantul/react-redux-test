import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../actions";
import "./main.css";
import { v4 as uuidv4 } from "uuid";

function Main() {
  const tasks = useSelector((state) => state.tasks);
  const inputTask = useSelector((state) => state.inputTask);
  const editedTaskId = useSelector((state) => state.editedTaskId);
  const dispatch = useDispatch();

  const handleChangeAddTask = (e) => {
    dispatch(actions.changeInputField(e.target.value));
  };

  const handleClickAdd = () => {
    if (inputTask) {
      dispatch(actions.addTask({ id: uuidv4(), value: inputTask }));
    }
  };

  const handleClickDelete = (id) => {
    dispatch(actions.deleteTask(id));
  };

  const handleClickEdit = (id) => {
    dispatch(actions.editTask(id));
  };

  const handleChangeInput = (id, value) => {
    dispatch(actions.inputTask(id, value));
  };

  return (
    <>
      <Header />
      <main className="container">
        <h3>Tasks</h3>
        <input
          id="input-task"
          type="text"
          value={inputTask}
          onChange={handleChangeAddTask}
        />
        <button
          className="btn btn-info btn-sm align-middle"
          onClick={handleClickAdd}
        >
          Add task
        </button>
        <ul className="list-group">
          {tasks.map((task, i) => {
            return (
              <li key={task.id} className="list-group-item">
                <input
                  type="text"
                  disabled={task.id !== editedTaskId}
                  onChange={(e) => {
                    handleChangeInput({ id: task.id, value: e.target.value });
                  }}
                  onBlur={(e) => {
                    handleClickEdit(null);
                  }}
                  value={task.value}
                />
                <div>
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => {
                      handleClickEdit(task.id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleClickDelete(task.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}

export default Main;
