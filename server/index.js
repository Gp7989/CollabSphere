import dotenv from "dotenv";
import express, { json } from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();
const app = express();

app.use(json());
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;

// MongoDB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test Route
app.get("/", (req, res) => {
  res.send("CollabSphere API running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});