const express = require('express');
const router = express.Router();
const DonationController = require('../controllers/donationController');

router.post('/donation', DonationController.createDonation);

// GET request to fetch all donations
router.get('/donations', DonationController.getAllDonations);

// GET request to fetch a specific donation by ID
router.get('/donation/:donationId', DonationController.getDonationById);

// PUT request to update a specific donation by ID
router.put('/donation/:donationId', DonationController.updateDonation);

// DELETE request to delete a specific donation by ID
router.delete('/donation/:donationId', DonationController.deleteDonation);

module.exports = router;
