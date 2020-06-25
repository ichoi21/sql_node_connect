const express = require("express");
const router = express.Router();
const {
  seeAllTodos,
  showTodo,
  addTodo,
  delTodo,
  editTodo,
} = require("../config/orm.js");

router.get("/api", (req, res) => {
  seeAllTodos()
    .then((allTodos) => res.send(allTodos))
    .catch((err) => res.send(err));
});

router.get("/api/find/:id", (req, res) => {
  const id = parseInt(req.params.id);
  showTodo(id)
    .then((todo) => res.json(todo))
    .catch((err) => res.json(err));
});

router.post("/api", (req, res) => {
  addTodo(req.body.text)
    .then((resSubmit) => res.json(resSubmit))
    .catch((err) => res.json(err));
});

router.delete("/api/delete/:id", (req, res) => {
  const todoId = parseInt(req.params.id);
  delTodo(todoId)
    .then((resDel) => res.json(resDel))
    .catch((err) => res.json(err));
});

router.patch("/api", (req, res) => {
  // console.log(req.body);
  editTodo({
    editText: req.body.editText,
    todoId: parseInt(req.body.todoId),
    todoCompleted: req.body.todoCompleted === "false" ? false : true,
  })
    .then((resDel) => res.json(resDel))
    .catch((err) => res.json(err));
});

module.exports = router;
