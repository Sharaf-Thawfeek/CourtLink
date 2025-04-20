import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";  // Correct ES Module import
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// CORS Configuration
const corsOptions = {
  origin: "http://localhost:3000", // React app URL
  credentials: true,  // Allow cookies to be sent
};

app.use(cors(corsOptions));  // Apply CORS configuration to the whole app

// Middleware
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
