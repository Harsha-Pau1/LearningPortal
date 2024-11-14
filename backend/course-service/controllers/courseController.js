const Course = require("../models/courseModel");

// Create a new course
exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  try {
    const course = new Course({ title, description });
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).send(courses);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get course by ID
exports.getCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update course details
exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const updates = Object.keys(req.body);
  try {
    const course = await Course.findByIdAndUpdate(id, req.body, { new: true });
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).send("Course not found");
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
};
