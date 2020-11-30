import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import {useSelector, useDispatch} from 'react-redux';
import {addTask, changeInputField, deleteTask} from '../../actions';
import './main.css';
import { v4 as uuidv4 } from 'uuid';


function Main() {
    const tasks = useSelector(state => state.tasks);
    const inputTask = useSelector(state => state.inputTask);
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        dispatch(changeInputField(e.target.value))
    };

    const handleClickAdd = () => {
        if (inputTask) {
            dispatch(addTask({id: uuidv4(), value: inputTask}))
        }
    };

    const handleClickDelete = e => {
        dispatch(deleteTask(e.target.parentElement.parentElement.id))
        console.log(e.target.parentElement.parentElement);
    };

    return(
        <>
            <Header />
                <main className='container'>
                    <h3>Tasks</h3>
                    <input id='input-task' type='text' value={inputTask} onChange={handleChangeInput} />
                    <button className='btn btn-info btn-sm align-middle' onClick={handleClickAdd}>Add task</button>
                    <ul className="list-group">
                        {tasks.map((task, i)=>{
                           return (
                           <li key={task.id}  id={task.id} className="list-group-item">
                               <input type='text' disabled="disabled" value={task.value} />
                               <div>
                                    <button className="btn btn-outline-success btn-sm">Edit</button>
                                    <button className="btn btn-outline-danger btn-sm" onClick={handleClickDelete}>Delete</button>
                               </div>
                           </li>)
                        })}
                    </ul>
                </main> 
            <Footer />
        </>)
}

export default Main;