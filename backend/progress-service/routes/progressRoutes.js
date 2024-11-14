const express = require("express");
const progressController = require("../controllers/progressController");

const router = express.Router();

// Progress API endpoints
router.post("/progress", progressController.createProgress);
router.get("/progress/:userId/:courseId", progressController.getProgress);
router.put("/progress/:userId/:courseId", progressController.updateProgress);

module.exports = router;
