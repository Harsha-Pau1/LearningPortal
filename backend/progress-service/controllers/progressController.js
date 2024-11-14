const Progress = require("../models/progressModel");

// Create a new progress record
exports.createProgress = async (req, res) => {
  const { userId, courseId, completed } = req.body;
  try {
    const progress = new Progress({ userId, courseId, completed });
    await progress.save();
    res.status(201).send(progress);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get progress for a specific user and course
exports.getProgress = async (req, res) => {
  const { userId, courseId } = req.params;
  try {
    const progress = await Progress.findOne({ userId, courseId });
    if (!progress) {
      return res.status(404).send("Progress not found");
    }
    res.status(200).send(progress);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update progress
exports.updateProgress = async (req, res) => {
  const { userId, courseId } = req.params;
  const { completed } = req.body;
  try {
    const progress = await Progress.findOneAndUpdate(
      { userId, courseId },
      { completed },
      { new: true }
    );
    if (!progress) {
      return res.status(404).send("Progress not found");
    }
    res.status(200).send(progress);
  } catch (error) {
    res.status(400).send(error);
  }
};
