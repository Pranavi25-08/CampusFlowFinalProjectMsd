import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import eventsRouter from "./routes/events.js";
import placementsRouter from "./routes/placements.js";
import forumRouter from "./routes/forum.js";
import authRouter from "./routes/auth.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI);

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/events", eventsRouter);
app.use("/api/placements", placementsRouter);
app.use("/api/forum", forumRouter);

// Root route
app.get("/", (req, res) => {
  res.send("CampusFlow Backend is running ");
});

app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
