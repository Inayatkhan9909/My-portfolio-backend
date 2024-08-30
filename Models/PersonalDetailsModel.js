const mongoose = require("mongoose");
const ProjectsModel = require("./ProjectsModel");
const ExperienceModel = require("./ExperienceModel");
const PersonalDetailsSchema = new mongoose.Schema({
  fullname: { 
    type: String, 
    required: [true, "Fullname is required"], 
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, "Email is required"], 
    trim: true, 
    lowercase: true, 
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] 
  },
  linkedinprofile: { 
    type: String, 
    required: [true, "Linkedin profile is required"],  
  },
  cabtype: { 
    type: String, 
    required: [true, "Cab type is required"], 
    enum: ["Swift dzire", "Honda Amaze", "Crysta", "Innova", "Traveler"], 
    trim: true 
  },
  persons: { 
    type: Number, 
    required: [true, "Number of persons is required"], 
    min: [1, "At least one person is required"], 
    max: [15, "Maximum 15 persons allowed"] 
  },
  skills: [],
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ProjectsModel'
  }],
  experience: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ExperienceModel'
  }],

  city: { 
    type: String, 
    required: [true, "City is required"], 
    trim: true, 
    maxlength: [150, "City name cannot exceed 150 characters"] 
  },
  stateaddress: { 
    type: String, 
    required: [true, "State is required"], 
    trim: true, 
    maxlength: [150, "State address cannot exceed 150 characters"] 
  },
}, { timestamps: true });


const PersonalDetailsModel = mongoose.models.PersonalDetailsModel || mongoose.model("PersonalDetailsModel", PersonalDetailsSchema);

module.exports = PersonalDetailsModel;
