const { Router } = require("express");

const {
  getTasks,
  saveTasks,
  updateTasks,
  deleteTasks,
} = require("../controllers/TaskController");

const router = Router();

router.get("/show", getTasks);
router.post("/add", saveTasks);
router.put("/update/:_id", updateTasks);
router.delete("/delete/:_id", deleteTasks);

module.exports = router;
