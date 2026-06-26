const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors({
    origin: "https://frontend-mkiufvpp9-skreshma1386-alts-projects.vercel.app"
}));

app.use(express.json());
// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  family: 4,
  serverSelectionTimeoutMS: 10000,
})
.then(() => {
  console.log("MongoDB Connected Successfully");
})
.catch((error) => {
  console.log("MongoDB Connection Error:", error.message);
});

// Routes
const complaintRoutes = require("./routes/complaintRoutes");

app.use("/api/complaints", complaintRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Complaint Management System Backend Running Successfully");
});

// Port for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});