const express = require('express');
const router = express.Router();
const Job = require('./models/job'); // Import the Job model

// API endpoint to fetch jobs
router.get('/jobs', async (req, res) => {
  try {
    const jobs = await Job.find(); // Fetch all jobs from MongoDB
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
