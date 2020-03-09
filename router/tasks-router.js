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



module.exports = router
