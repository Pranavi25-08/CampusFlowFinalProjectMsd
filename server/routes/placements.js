import express from "express";
import Placement from "../models/Placement.js";

const router = express.Router();

// Get all placements
router.get("/", async (req, res) => {
  try {
    const placements = await Placement.find().sort({ createdAt: -1 });
    res.json(placements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new placement
router.post("/", async (req, res) => {
  try {
    const placement = new Placement(req.body);
    await placement.save();
    res.status(201).json(placement);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete placement
router.delete("/:id", async (req, res) => {
  try {
    await Placement.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
