const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  feedback: { type: String, required: true },
  rating: { type: Number, default: 0 },
  submittedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
