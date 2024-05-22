const express = require("express");
const Tour = require("../models/tour.model.js");
const router = express.Router();

const {
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tour.controller.js");

router.get("/", getTours);

router.get("/:id", getTour);

router.post("/", createTour);

router.post("/:id", updateTour);

router.delete("/:id", deleteTour);

module.exports = router;
