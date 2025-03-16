import React, { useContext, useRef, useState } from 'react'
import { TasksContext } from './ToDoApp'

function ToDoItem({ id, name, complated }) {
  const { toggleTask, deleteTask, updateTask } = useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  const nameRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (nameRef.current.value === '') {
      return;
    }

    updateTask(id, nameRef.current.value);
    setIsEditing(false);

  }

  return (
    <>
      <li>
        {isEditing ? (
          <>
            <form onSubmit={handleSubmit}>
              <input autoFocus type="text" defaultValue={name} ref={nameRef} />
              <button data-button-edit >Edit</button>

            </form>
          </>
        ) : (
          <>
            <label className='list-item-label'>
              <input type="checkbox" checked={complated} onChange={(e) => toggleTask(id, e.target.checked)} />

              <span data-list-item-text>{name}</span>
            </label>

            <button data-button-edit onClick={() => setIsEditing(true)}>Edit</button>

            <button onClick={() => deleteTask(id)}>Delete task</button>
          </>
        )}

      </li>
    </>
  )
}

export default ToDoItem