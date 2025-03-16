import React from 'react'
import { getTasks } from "../../api/tasks";
import { useLoaderData } from 'react-router-dom';
import ToDoItem from '../ToDoItem';

function Tasks() {

  const tasks = useLoaderData();
  console.log(tasks)
  return (
    <div>
       <h1 className="page-title">Todos</h1>
      <ul>
        {tasks.map((task) => {
          return <ToDoItem key={task.id} task={task} />
        })}
      </ul>
    </div>
  )
}

function loader( {request: {signal}} ) {
  return getTasks({signal})
}

export const tasksRoute = {
  loader,
  element: <Tasks />
}