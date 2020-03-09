const express = require("express")
const model = require("./model")

const router = express.Router({
    mergeParams: true
})

router.get("/", async (req, res, next) => {
    try {
        const { id } = req.params
        const resources = await model.getResources(id)
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const {name, description} = req.body
        const { id } = req.params
        const resources = await model.addResource(id, {name, description})
        res.json(resources)
    } catch (err) {
        next(err)
    }
})


module.exports = router
