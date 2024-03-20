import React, { useState } from 'react';

const DonationEntryForm = ({ onSubmit, initialData }) => {
    const [donationData, setDonationData] = useState({
      donorName: initialData ? initialData.donorName : '',
      amount: initialData ? initialData.amount : '',
      date: initialData ? initialData.date : '',
      paymentMethod: initialData ? initialData.paymentMethod : 'cash',
      purpose: initialData ? initialData.purpose : '',
    });

    const handleChange = (e) => {
      setDonationData({ ...donationData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();

     
    };

    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
        <input 
          name="donorName" 
          type="text" 
          placeholder="Donor Name" 
          value={donationData.donorName}
          onChange={handleChange} 
          className="px-4 py-2 border rounded shadow-sm"
        />
        <input 
          name="amount" 
          type="number" 
          placeholder="Amount" 
          value={donationData.amount}
          onChange={handleChange} 
          className="px-4 py-2 border rounded shadow-sm"
        />
        <input 
          name="date" 
          type="date" 
          value={donationData.date}
          onChange={handleChange} 
          className="px-4 py-2 border rounded shadow-sm"
        />
        <select 
          name="paymentMethod" 
          value={donationData.paymentMethod}
          onChange={handleChange} 
          className="px-4 py-2 border rounded shadow-sm"
        >
          <option value="cash">Cash</option>
          <option value="check">Check</option>
          <option value="card">Card</option>
        </select>
        <textarea 
          name="purpose" 
          placeholder="Purpose or Notes" 
          value={donationData.purpose}
          onChange={handleChange} 
          className="px-4 py-2 border rounded shadow-sm"
        ></textarea>
        <button 
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {initialData ? "Edit Donation" : "Add Donation"}
        </button>
      </form>
    );
};

export default DonationEntryForm;
