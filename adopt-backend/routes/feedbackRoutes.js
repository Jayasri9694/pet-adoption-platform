const express = require('express');
const router = express.Router();
const FeedbackController = require('../controllers/FeedbackController');

router.post('/', FeedbackController.submitFeedback);

router.get('/', FeedbackController.getAllFeedback);

module.exports = router;
