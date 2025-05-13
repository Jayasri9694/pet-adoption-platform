const express = require('express');
const { adoptPet } = require('../controllers/adoptController'); // Assuming the controller is implemented here
const router = express.Router();

router.post('/', adoptPet); 

module.exports = router;
