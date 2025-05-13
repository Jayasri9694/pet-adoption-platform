const Application = require('../models/Application');


exports.createApplication = async (req, res) => {
  console.log('Request body:', req.body);

  const { userId, petId, message } = req.body;

  if (!userId || !petId || !message) {
    console.error('Missing fields:', { userId, petId, message });
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const application = new Application({
      user: userId,
      pet: petId,
      message,
    });

    console.log('Saving application:', application);

    await application.save();

    res.status(201).json({
      message: 'Application created successfully!',
      application,
    });
  } catch (error) {
    console.error('Error submitting application:', error); // Add this line
    res.status(500).json({ message: 'Failed to submit application' });
  }
};

exports.updateApplication = async (req, res) => {
  try {
    const applicationId = req.params.id;
    const updatedApplication = await Application.findByIdAndUpdate(applicationId, req.body, { new: true });

    if (!updatedApplication) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.status(200).json({
      message: 'Application updated successfully',
      application: updatedApplication,
    });
  } catch (error) {
    console.error('Error updating application:', error);
    res.status(500).json({ message: 'Failed to update application' });
  }
};


exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id).populate('pet user');
    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.json(application);
  } catch (error) {
    console.error('Error retrieving application by ID:', error);
    res.status(500).json({ message: 'Failed to retrieve application' });
  }
};
exports.listApplications = async (req, res) => {
  try {
    const applications = await Application.find().populate('pet user');
    res.json(applications);
  } catch (error) {
    console.error('Error retrieving applications:', error);
    res.status(500).json({ message: 'Failed to retrieve applications' });
  }
};