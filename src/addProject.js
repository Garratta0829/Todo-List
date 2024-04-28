
let projects = []
const projectPanel = document.getElementById('project-panel')

function addProject() {
    const addProjectBtn = document.getElementById('add-project-button')
    const panel = document.getElementById('panel')
    const board = document.getElementById('board')
    const projectInput = document.getElementById('project-input')
    const projectName = projectInput.value
    createProject(projectName)
}

export { addProject, createProject, renderProjectList}

// project.addEventListener('click', () => {
//     board.innerHTML = ''
//     const projectTitle = document.createElement('h1')
//     projectTitle.innerHTML = projectName
//     board.appendChild(projectTitle)})

function createProject(projectName) {
    projects.push(projectName)
    renderProjectList()
}

// put the event listener into index.js

function renderProjectList(projectName) {
    projectPanel.innerHTML = ''
    
    for (let i=0; i <= projects.length; i++) {
        const project = document.createElement('div')
        project.innerHTML = projects[i]
        project.classList.add('project-div')
        projectPanel.appendChild(project)
        console.log(projects)
    }
}
