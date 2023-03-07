const { Router } = require("express")

const userRouter = require("./user.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")
const tagsRoutes = require("./tags.routes")
const sessionRouter = require("./sessions.routes")

const routes = Router()

routes.use("/users", userRouter)
routes.use("/sessions", sessionRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)


module.exports = routes