



function addTodo() {
    const addTodoBtn = document.getElementById('add-todo-button')
    const board = document.getElementById('board')
    const todo = document.createElement('div')
    todo.textContent = 'Todo'
    todo.classList.add('todo')
    board.appendChild(todo)

}



export { addTodo };