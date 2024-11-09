// models/complaint.js
const mongoose = require('mongoose');

// Define the complaint schema
const complaintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Create the model based on the schema
const Complaint = mongoose.model('Complaint', complaintSchema);

// Export the Complaint model
module.exports = Complaint;
