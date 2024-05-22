const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name of the tour is required"] },

    time: {
      type: Number,
      required: [true, "Time is required"],
    },
    cost: {
      type: Number,
      required: [true, "Cost is required"],
    },
    coment: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
