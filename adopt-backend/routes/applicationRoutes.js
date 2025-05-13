const express = require('express');
const { createApplication, updateApplication, listApplications,  getApplicationById } = require('../controllers/applicationController');

const router = express.Router();

router.post('/', createApplication);
router.put('/:id', updateApplication);
router.get('/:id', getApplicationById);
router.get('/', listApplications);

module.exports = router;