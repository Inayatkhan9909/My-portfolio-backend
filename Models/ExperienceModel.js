const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  company: { type: String, trim: true, required: true },
  role: { type: String, trim: true, required: true },
  startdate: { type: Date, required: true },
  enddate: { type: Date, required: true },
  description: { type: String, trim: true, required: true },
  stillworking: { type: Boolean, required: true }
}, { timestamps: true });

const ExperienceModel = mongoose.models.ExperienceModel || mongoose.model("ExperienceModel", ExperienceSchema);

module.exports = ExperienceModel;
