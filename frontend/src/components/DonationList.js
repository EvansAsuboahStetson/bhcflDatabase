import { useState } from "react";
import DeleteIcon from "./icon/deleteIcon";
import EditIcon from "./icon/editIcon";
import Search from "./search";

const DonationList = ({ donations, onDonationSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };
    const filteredDonations = donations.filter(donation => 
        donation.donorName.toLowerCase().includes(searchTerm.toLowerCase())
        // Add other criteria as necessary
    );
  return (
    <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            {/* Adjusted classes for alignment */}
            <th className="px-3 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
              Donor Name
            </th>
            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-right text-sm uppercase font-normal">
              Amount
            </th>
            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-center text-sm uppercase font-normal">
              Date
            </th>
            <th className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
              Purpose
            </th>
            <td className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal">
                <Search onSearchChange={handleSearchChange} />
              </td>
          </tr>
        </thead>
        <tbody>
          {filteredDonations.map((donation) => (
            <tr key={donation.id}>
              {/* Ensure that these classes align with the headers */}
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                {donation.donorName}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                ${donation.amount.toFixed(2)}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                {new Date(donation.date).toLocaleDateString()}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                {donation.purpose}
              </td>
              <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
                <div className="flex items-center justify-start space-x-2">
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                      /* delete logic */
                    }}
                  >
                    <DeleteIcon />
                  </button>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onDonationSelect(donation)}
                  >
                    <EditIcon />
                  </button>
                </div>
              </td>
             
            </tr>

          ))}
        </tbody>
      </table>
      {donations.length === 0 && (
        <div className="px-5 py-5 bg-white text-sm">No donations found.</div>
      )}
    </div>
  );
};

export default DonationList;
