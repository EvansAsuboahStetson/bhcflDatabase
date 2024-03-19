const DonationList = ({ donations, onDonationSelect }) => {
    return (
      <div className="overflow-x-auto">
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
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id} onClick={() => onDonationSelect(donation)} className="cursor-pointer">
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
              </tr>
            ))}
          </tbody>
        </table>
        {donations.length === 0 && (
          <div className="px-5 py-5 bg-white text-sm">
            No donations found.
          </div>
        )}
      </div>
    );
  };
  
  export default DonationList;
  