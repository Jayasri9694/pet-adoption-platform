// controllers/adoptController.js
const Adoption = require('../models/Adoption');  // Assuming you have an Adoption model

exports.adoptPet = async (req, res) => {
  const { petId, userId } = req.body;

  if (!petId || !userId) {
    return res.status(400).json({ message: 'Both petId and userId are required.' });
  }

  try {
    const adoption = new Adoption({ pet: petId, user: userId });
    await adoption.save();

    res.status(201).json({ message: 'Adoption request created successfully!', adoption });
  } catch (error) {
    console.error('Error creating adoption request:', error);
    res.status(500).json({ message: 'Failed to create adoption request.' });
  }
};
