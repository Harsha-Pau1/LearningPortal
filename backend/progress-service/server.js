const express = require("express");
const mongoose = require("mongoose");
const progressRoutes = require("./routes/progressRoutes");
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/progress-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use("/api", progressRoutes);

// Start server
app.listen(5003, () => {
  console.log("Progress Service running on port 5003");
});
