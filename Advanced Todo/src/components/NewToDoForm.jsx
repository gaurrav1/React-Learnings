import React, { useContext, useRef } from 'react'
import { TasksContext } from './ToDoApp';

function NewToDoForm() {
    const nameRef = useRef();
    const { addTask } = useContext(TasksContext);

    function handleSubmit(e) {
        e.preventDefault();
        
        if (nameRef.current.value === '') {
            return;
        }
        
        addTask(nameRef.current.value);

        nameRef.current.value = '';
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Add new task</label>
            <input autoFocus ref={nameRef} placeholder='&#x300B; Task name...' />
            <br />
            <button>Add Task</button>
        </form>
    )
}

export default NewToDoForm