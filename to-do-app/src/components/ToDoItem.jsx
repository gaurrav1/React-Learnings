import React from 'react'

function ToDoItem({id, name, complated, onToggle, onDelete}) {

  return (
    <>
        <li>
            <input type="checkbox" checked={complated} onChange={(e) => onToggle(id, e.target.checked)}/> : {name}
            <button onClick={() => onDelete(id)}>Delete task</button>
        </li>
    </>
  )
}

export default ToDoItem