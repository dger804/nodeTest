const express = require("express");
const auth = require("../middlewares/auth");
const authController = require("../controllers/authController");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/tasks", auth, taskController.createTask);
router.get("/tasks", auth, taskController.getTasks);
router.put("/tasks/:id", auth, taskController.updateTask);
router.delete("/tasks/:id", auth, taskController.deleteTask);

module.exports = router;
