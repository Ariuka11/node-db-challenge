const dbConfig = require("../data/dbConfig")

module.exports = {
    getProjects,
    getProjectById,
    addProject,
    getTasks,
    addTask,
    getResources,
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

function addProject() {

}

function getTasks(id) {
    return dbConfig("tasks as t")
        .join("projects as p", "p.id", "t.project_id")
        .where({project_id: id})
        .select("t.*", "p.name", "p.description")
}

function addTask() {

}

function getResources(id) {
    return dbConfig("resources as r")
        .join("projects as p", "p.id", "r.project_id")
        .where({project_id : id})
        .select("r.*", "p.name")
}

function addResource() {

}