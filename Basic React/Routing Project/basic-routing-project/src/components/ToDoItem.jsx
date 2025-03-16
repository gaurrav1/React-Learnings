function ToDoItem({ task}) {
  return (
    <li className={task.completed ? 'strike-through' : ''}>
        {task.title}
    </li>
  )
}

export default ToDoItem