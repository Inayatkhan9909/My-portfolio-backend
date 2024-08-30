const mongoose = require("mongoose");

const ProjectsSchema = new mongoose.Schema({
  title: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  githublink: { type: String, trim: true, required: true },
  deploylink: { type: String, trim: true, required: true },
}, { timestamps: true });

const ProjectsModel = mongoose.models.ProjectsModel || mongoose.model("ProjectsModel", ProjectsSchema);

module.exports = ProjectsModel;
