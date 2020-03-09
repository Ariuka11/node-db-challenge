const express = require("express")
const model = require("./model")

const router = express.Router({
    mergeParams: true
})

router.get("/", async (req, res, next) => {
    try {
        const { id } = req.params
        const tasks = await model.getTasks(id)
        res.json(tasks)
    } catch (err) {
        next(err)
    }

})

router.post("/", async (req, res, next) => {
    try {
        const { description, notes, completed } = req.body
        const { id } = req.params
        const tasks = await model.addTask(id, { description, notes, completed })
        res.json(tasks)
    } catch (err) {
        next(err)
    }
})



module.exports = router
