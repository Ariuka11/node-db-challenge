const express = require("express")
const taskRouter = require('./tasks-router')
const resourceRouter = require('./resources-router')

const router = express.Router()
router.use("/:id/resources", resourceRouter)
router.use("/:id/tasks", taskRouter)

router.use("/", async(req, res, next) => {
    try {
        
    } catch (err) {
        next(err)
    }
})

module.exports = router