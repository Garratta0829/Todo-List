import { addTodo } from './addTodo.js';
import { addProject } from './addProject.js';
import { renderProjectList } from './addProject.js';
import { createProject } from './addProject.js';
import './style.css';

const addTodoBtn = document.getElementById('add-todo-button')
const addProjectBtn = document.getElementById('add-project-button')
const panel = document.getElementById('panel')
const board = document.getElementById('board')



// panel needs ability to create projects and create tasks
// when you click on a project on the panel, it will show up on the board
// 

addTodoBtn.addEventListener('click', () => {
    addTodo()
})

addProjectBtn.addEventListener('click', () => {
    addProject()
    
})

