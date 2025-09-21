import './styles.css'

type ToDo = {
    id: string,
    name: string,
    complete: boolean
}

const form = document.querySelector<HTMLFormElement>('#new-todo-form')!
const toDoInput = document.querySelector<HTMLInputElement>('#todo-input')!
const list = document.querySelector<HTMLUListElement>('#list')!

let toDoArray = loadToDos()
toDoArray.forEach(renderNewToDos)

form.addEventListener('submit', (event) => {
    event.preventDefault()
    const toDoName = toDoInput.value

    if (toDoName === "") { return }
    const newToDo = {
        id: crypto.randomUUID(),
        name: toDoName,
        complete: false
    }

    toDoArray.push(newToDo)
    renderNewToDos(newToDo)
    saveToDos()
    toDoInput.value = ""
})

function renderNewToDos(toDo: ToDo) {
    const listItem = document.createElement("li")
    listItem.classList.add("list-item")

    const label = document.createElement("label")
    label.classList.add("list-item-label")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("label-input")

    const textElement = document.createElement("span")
    textElement.classList.add("label-text")

    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    deleteButton.classList.add("delete-btn")

    label.append(checkbox, textElement)
    listItem.append(label, deleteButton)
    list.append(listItem)

    textElement.innerText = toDo.name

    checkbox.checked = toDo.complete
    checkbox.addEventListener('change', () => {
        toDo.complete = checkbox.checked
        saveToDos()
    })

    deleteButton.addEventListener('click', () => {
        listItem.remove()
        toDoArray = toDoArray.filter(t => t.id !== toDo.id)
        saveToDos()
    })
}

function saveToDos() {
    localStorage.setItem('todos', JSON.stringify(toDoArray))
}

function loadToDos() {
    const value = localStorage.getItem('todos')
    if (!value) return []
    return JSON.parse(value) as ToDo[]
}
