const express = require('express')

const server = express()
const port = 4000

server.use(express.json())

server.get("/", (req, res) => {
    res.send(`<h2>Sprint Challenge for DB</h2>`)
})

server.use((req, res) => {
    res.status(404).json({
        message: "Route was not found"
    })
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: "Error retrieving the Data"
    })
})
server.listen(port, () => {
  console.log( `Server is running on ${port}...`) 
})