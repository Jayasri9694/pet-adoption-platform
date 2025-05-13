const mongoose = require('mongoose');

// Define the schema for Adoption model
const adoptionSchema = new mongoose.Schema(
  {
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pet',  // Reference to the Pet model
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',  // Reference to the User model
      required: true,
    },
    adoptionDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'rejected'],
      default: 'pending',  // Initial status of adoption
    },
  },
  { timestamps: true }  // Automatically adds createdAt and updatedAt fields
);

// Create the Adoption model
const Adoption = mongoose.model('Adoption', adoptionSchema);

module.exports = Adoption;
