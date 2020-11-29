import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {useSelector, useDispatch} from 'react-redux';
import {addTask, changeInputField} from '../actions';

function Main() {
    const tasks = useSelector(state => state.tasks);
    const inputField = useSelector(state => state.inputField);
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        dispatch(changeInputField(e.target.value))
    };

    const handleClickAdd = () => {
        dispatch(addTask(document.getElementById('input-task').value))
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
                    <input id='input-task' type='text' value={inputField} onChange={handleChangeInput} />
                    <button className='btn btn-primary' onClick={()=>{dispatch(addTask(document.getElementById('input-task').value))}}>Add</button>
                </main> 
            <Footer />
        </>)
}

export default Main;