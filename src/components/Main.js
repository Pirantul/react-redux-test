import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {useSelector, useDispatch} from 'react-redux';
import {addTask, changeInputField} from '../actions';

function Main() {
    const tasks = useSelector(state => state.tasks);
    const inputTask = useSelector(state => state.inputTask);
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        dispatch(changeInputField(e.target.value))
    };

    const handleClickAdd = () => {
        dispatch(addTask(inputTask))
    };

    return(
        <>
            <Header />
                <main>
                    <h3>Tasks</h3>
                    <ul>
                        {tasks.map((task, i)=>{
                           return (<li key={i}>{task}</li>)
                        })}
                    </ul>
                    <input id='input-task' type='text' value={inputTask} onChange={handleChangeInput} />
                    <button className='btn btn-primary' onClick={()=>{dispatch(addTask(inputTask))}}>Add</button>
                </main> 
            <Footer />
        </>)
}

export default Main;