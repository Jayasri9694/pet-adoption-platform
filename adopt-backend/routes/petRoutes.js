const express = require('express');
const { createPet, updatePet, listPets} = require('../controllers/petController');

const router = express.Router();


router.post('/',createPet);
router.put('/:id', updatePet);
router.get('/', listPets);

module.exports = router;