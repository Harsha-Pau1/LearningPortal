const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/user-service", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
app.use("/api", userRoutes);

// Start server
app.listen(5001, () => {
  console.log("User Service running on port 5001");
});
