const router = require('express').Router()
const todoController = require('../controllers/todoController')
const userController = require('../controllers/userController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.post("/signup", userController.register)
router.post("/signin", userController.login)

router.use(authentication)
router.get("/todos", todoController.showAll)
router.get("/todos/:id", todoController.showOne)
router.post("/todos", todoController.createTodo)


router.delete("/todos/:id", authorization, todoController.delete)
router.put("/todos/:id", authorization, todoController.update)
router.patch("/todos/:id", authorization, todoController.updateOne)


module.exports = router