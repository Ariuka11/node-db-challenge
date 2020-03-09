const express = require("express")
const projectRouter = require('./router/projects-router')

const server = express()
const port = 4000

server.use(express.json())
server.use("/api/projects", projectRouter)

server.get("/", (req, res) => {
    res.send(`<h2>Sprint Challenge DB</h2>`)
})

server.listen(port, () => {
    console.log(`Listening on ${port}...`)
})

server.use((req, res) => {
    res.status(404).json({
        message: "Route was not found"
    })
})

server.use((err,req, res, next) => {
    res.status(500).json({
        message: "Error retrieving the Data"
    })
})