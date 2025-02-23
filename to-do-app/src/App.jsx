import { useState } from "react"
import ToDoItem from "./components/ToDoItem";
import './styles/todo-styles.css'

function App() {

  const [name, setName] = useState('');
  const [tasks, setTasks] = useState([]);

  function addTask(e) {
    e.preventDefault();

    if (name === '') {
      return;
    }

    setTasks( currentTask => {
      return [...currentTask, {id: crypto.randomUUID(), name: name, complated: false}]
    });

    setName('');
  }

  function toggleTask(id, checked) {
    setTasks( currentTask => {
      return currentTask.map(task => {
        if (task.id === id) {
          return {...task, complated: checked}
        }
        return task;
      })
    });
  }

  function deleteTask(id) {
    setTasks( currentTask => {
      return currentTask.filter(task => task.id !== id);
    });
  }

  return (
    <>
      <form onSubmit={addTask}>
        <input value={name} onChange={e => setName(e.target.value)} />
        <br />
        <button>Add Task</button>
      </form>
      <hr />
      
      <ul>
        {
          tasks.map(task => {
            return (
              <ToDoItem key={task.id} {...task} onToggle={toggleTask} onDelete={deleteTask} />
            )
          })
        }
      </ul>
    </>
  )
}

export default App
