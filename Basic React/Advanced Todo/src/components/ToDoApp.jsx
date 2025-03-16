import React, { createContext, useEffect, useReducer, useState } from 'react'
import ToDoItem from './ToDoItem';
import NewToDoForm from './NewToDoForm';
import ToDoList from './ToDoList';
import ToDoFilterForm from './ToDoFilterForm';

const LOCAL_STORAGE_KEY = 'tasks';
const ACTIONS = {
  ADD: "ADD",
  UPDATE: "UPDATE",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE"
}

function reducer(tasks, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD:
        return [...tasks, {id: crypto.randomUUID(), name: payload.name, complated: false}];
    
    case ACTIONS.TOGGLE:
      return tasks.map(task => {
        if (task.id === payload.todoId) {
          return {...task, complated: payload.complated};
        }
        return task;
      });


    case ACTIONS.UPDATE:
      return tasks.map(task => {
        if (task.id === payload.todoId) {
          return {...task, name: payload.name};
        }
        return task;
      });

    case ACTIONS.DELETE:
      return tasks.filter(task => task.id !== payload.todoId);
    default:
      throw new Error(`No action found for ${type}.`);
  }
}

export const TasksContext = createContext()

function ToDoApp() {

    const [filterName, setFilterName] = useState('');

    const [hideComplatedFilter, setHideComplatedFilter] = useState(false);
    const [tasks, dispatch] = useReducer(reducer, [], (initialValue) => {
      const value = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (value == null) return initialValue
      
      return JSON.parse(value);
    });

    const filteredTasks = tasks.filter( (task) => {
      if (hideComplatedFilter && task.complated) return false
      return task.name.includes(filterName);
    })

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);
  
    function addTask(name) {
      dispatch({ type: ACTIONS.ADD, payload: { name: name } });
    }
  
    function toggleTask(id, checked) {
      dispatch({ type: ACTIONS.TOGGLE, payload: { todoId: id, complated: checked } });
    }

    function updateTask(id, name) {
      dispatch({ type: ACTIONS.UPDATE, payload: { todoId: id, name: name } });
    }
  
    function deleteTask(id) {
      dispatch({ type: ACTIONS.DELETE, payload: { todoId: id } });
    }

    return (
        <TasksContext.Provider
          value={{
            tasks: filteredTasks,
            addTask,
            toggleTask,
            updateTask,
            deleteTask
          }}
        >
          
          <h2> Welcome to Advanced to-do mini app</h2>
          <ToDoFilterForm name={filterName} setName={setFilterName} hideComplated={hideComplatedFilter} setHideComplated={setHideComplatedFilter} />
          <NewToDoForm />
          <hr />
          
          <ToDoList />
        </TasksContext.Provider>
    )
}

export default ToDoApp