const Donation = require('../models/Donation')
const DonationServices = {
    async createDonation(donationData) {
        try {
            const donation = new Donation(donationData);
            await donation.save();
            return donation;
        } catch (error) {
            throw error;
        }
    },

    async getAllDonations() {
        try {
            const donations = await Donation.find({});
            return donations;
        } catch (error) {
            throw error;
        }
    },

    async getDonationById(id) {
        try {
            const donation = await Donation.findById(id);
            return donation;
        } catch (error) {
            throw error;
        }
    },

    async updateDonation(id, updateData) {
        try {
            const donation = await Donation.findByIdAndUpdate(id, updateData, { new: true });
            return donation;
        } catch (error) {
            throw error;
        }
    },

    async deleteDonation(id) {
        try {
            await Donation.findByIdAndDelete(id);
            return { message: "Donation successfully deleted" };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = DonationServices;
