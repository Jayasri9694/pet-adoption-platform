const Pet = require('../models/Pet');

exports.createPet = async (req, res) => {
  try {
    const pet = new Pet(req.body); // Assuming you have a Pet model
    await pet.save();
    res.status(201).json({ message: 'Pet created successfully!', pet });
  } catch (error) {
    console.error('Error creating pet:', error);
    res.status(500).json({ message: 'Failed to create pet' });
  }
};


exports.updatePet = async (req, res) => {
  try {
    const { id } = req.params; // Get the pet ID from the route parameter
    const updatedPet = await Pet.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedPet) {
      return res.status(404).json({ message: 'Pet not found' });
    }

    res.status(200).json({
      message: 'Pet updated successfully',
      pet: updatedPet,
    });
  } catch (error) {
    console.error('Error updating pet:', error);
    res.status(500).json({ message: 'Failed to update pet' });
  }
};

exports.listPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve pets' });
  }
};