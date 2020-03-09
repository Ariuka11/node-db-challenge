const dbConfig = require("../data/dbConfig")

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getTasks,
    getTaskbyId,
    addTask,
    getResources,
    getResourcebyId,
    addResource
}

function getProjects() {
    return dbConfig("projects")
}

function getProjectById(id) {
    return dbConfig("projects")
        .where({ id })
        .first()
}

async function addProject(project) {
    const [id] = await dbConfig("projects").insert(project)
    return dbConfig("projects")
        .where({ id })
        .first()
}

function getTasks(id) {
    return dbConfig("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .where({ project_id: id })
        .select("t.*", "p.name", "p.description")
}

function getTaskbyId(projectId, id) {
    return dbConfig("tasks")
        .where({ id, project_id: projectId })
        .first()
}

async function addTask(projectId, newTask) {
    const data = { project_id: projectId, ...newTask }
    const [id] = await dbConfig("tasks").insert(data)
    return getTaskbyId(projectId, id)
}

function getResources(id) {
    return dbConfig("resources as r")
        .join("projects as p", "p.id", "r.project_id")
        .where({ project_id: id })
        .select("r.*", "p.name")
}

function getResourcebyId(projectId, id) {
    return dbConfig("resources")
        .where({ id, project_id: projectId })
        .first()
}

async function addResource(projectId, newResource) {
    const data = { project_id: projectId, ...newResource }
    const [id] = await dbConfig("resources").insert(data)
    return getResourcebyId(projectId, id)
}