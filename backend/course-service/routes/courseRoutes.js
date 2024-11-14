const express = require("express");
const courseController = require("../controllers/courseController.js");

const router = express.Router();

// Course API endpoints
router.post("/courses", courseController.createCourse);
router.get("/courses", courseController.getCourses);
router.get("/courses/:id", courseController.getCourse);
router.put("/courses/:id", courseController.updateCourse);
router.delete("/courses/:id", courseController.deleteCourse);

module.exports = router;
