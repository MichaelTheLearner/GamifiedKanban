const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const kanbanController = require("../controllers/kanban");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Kanban Routes

router.post("/createColumn", kanbanController.createColumn);

router.delete("/deleteColumn/:id", kanbanController.deleteColumn);

router.post("/createCard/", kanbanController.createCard);

router.delete("/deleteCard/:id", kanbanController.deleteCard)

router.put("/createTodo/:id", kanbanController.createTodo);

router.put("/toggleTodo/:id", kanbanController.toggleTodo);

router.delete("/deleteTodo/:id", kanbanController.deleteTodo);

router.put("/moveCard/", kanbanController.moveCard);

module.exports = router;