import React, { useContext } from 'react'
import ToDoItem from './ToDoItem'
import { TasksContext } from './ToDoApp';

function ToDoList() {

    const { tasks } = useContext(TasksContext);

    return (
        <ul>
            {
                tasks.map(task => {
                    return (
                        <ToDoItem key={task.id} {...task} />
                    )
                })
            }
        </ul>
    )
}

export default ToDoList