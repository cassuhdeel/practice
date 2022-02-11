const router = require("express").Router();
const controller = require("./todo.controller");

router.route("/")
.get(controller.list)
.post(controller.create)



module.exports = router;