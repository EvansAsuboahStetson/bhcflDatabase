const mongoose = require('mongoose');
const DonationSchema = new mongoose.Schema({
  donorName: String,
  amount: Number,
  date: Date,
  paymentMethod: String,
  purpose: String,
});

module.exports = mongoose.model('Donation', DonationSchema);
