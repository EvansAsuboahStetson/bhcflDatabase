const DonationServices = require('../../services/donationServices');

const DonationController = {
    async createDonation(req, res) {
        try {
            const newDonation = await DonationServices.createDonation(req.body);
            res.status(201).json(newDonation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getAllDonations(req, res) {
        try {
            const donations = await DonationServices.getAllDonations();
            res.status(200).json(donations);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async getDonationById(req, res) {
        try {
            const donation = await DonationServices.getDonationById(req.params.donationId);
            if (!donation) {
                return res.status(404).json({ message: 'Donation not found' });
            }
            res.status(200).json(donation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async updateDonation(req, res) {
        try {
            const updatedDonation = await DonationServices.updateDonation(req.params.donationId, req.body);
            if (!updatedDonation) {
                return res.status(404).json({ message: 'Donation not found' });
            }
            res.status(200).json(updatedDonation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async deleteDonation(req, res) {
        try {
            await DonationServices.deleteDonation(req.params.donationId);
            res.status(200).json({ message: 'Donation successfully deleted' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = DonationController;
