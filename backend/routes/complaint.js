// routes/complaint.js
const express = require('express');
const Complaint = require('../models/complaint'); // Import the Complaint model
const router = express.Router();

// POST endpoint to submit a complaint
router.post('/', async (req, res) => {
  try {
    // Destructure data from the request body
    const { name, contact, email, location, description } = req.body;

    // Create a new Complaint document
    const newComplaint = new Complaint({
      name,
      contact,
      email,
      location,
      description,
    });

    // Save the complaint to the database
    await newComplaint.save();

    // Return success response
    res.status(201).json({
      message: 'Complaint submitted successfully',
      complaint: newComplaint,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
