import React, { useState } from 'react';
const DonationEntryForm = ({ onSubmit }) => {
    const [donationData, setDonationData] = useState({
      donorName: '',
      amount: '',
      date: '',
      paymentMethod: '',
      purpose: '',
    });

    const handleChange = (e) => {
      setDonationData({ ...donationData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(donationData);
      // Reset form or handle next steps
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <input 
          name="donorName" 
          type="text" 
          placeholder="Donor Name" 
          onChange={handleChange} 
          className="px-4 py-2 border rounded shadow-sm"
        />
        <input 
          name="amount" 
          type="number" 
          placeholder="Amount" 
          onChange={handleChange} 
          className="px-4 py-2 border rounded shadow-sm"
        />
        <input 
          name="date" 
          type="date" 
          onChange={handleChange} 
          className="px-4 py-2 border rounded shadow-sm"
        />
        <select 
          name="paymentMethod" 
          onChange={handleChange} 
          className="px-4 py-2 border rounded shadow-sm"
        >
          {/* payment method options */}
        </select>
        <textarea 
          name="purpose" 
          placeholder="Purpose or Notes" 
          onChange={handleChange} 
          className="px-4 py-2 border rounded shadow-sm"
        ></textarea>
        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Donation
        </button>
      </form>
    );
};

export default DonationEntryForm;
