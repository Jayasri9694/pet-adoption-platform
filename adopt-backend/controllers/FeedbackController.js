const Feedback = require('../models/Feedback');

// Controller to handle feedback submission
const submitFeedback = async (req, res) => {
  const { feedback, rating } = req.body;

  if (!feedback) {
    return res.status(400).json({ message: 'Feedback is required' });
  }

  try {
    const newFeedback = new Feedback({
      feedback,
      rating: rating || 0, // Default to 0 if rating is not provided
    });

    await newFeedback.save();
    res.status(201).json({ message: 'Feedback submitted successfully', data: newFeedback });
  } catch (error) {
    console.error('Error saving feedback:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to get all feedback
const getAllFeedback = async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ submittedAt: -1 }); // Sort by newest first
    res.status(200).json(feedbackList);
  } catch (error) {
    console.error('Error fetching feedback:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {submitFeedback,getAllFeedback};
