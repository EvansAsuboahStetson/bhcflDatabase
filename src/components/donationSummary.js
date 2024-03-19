const DonationSummary = ({ donations }) => {
    const totalDonations = donations.reduce((acc, donation) => acc + donation.amount, 0);
    const averageDonation = totalDonations / donations.length;
  
    // More calculations as needed
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Donations Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Total Donations</h2>
          <p className="text-2xl">${totalDonations.toFixed(2)}</p>
        </div>
  
        {/* Average Donation Card */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold">Average Donation</h2>
          <p className="text-2xl">${averageDonation.toFixed(2)}</p>
        </div>
  
        {/* Additional Cards for other metrics */}
  
      </div>
    );
  };
  
  export default DonationSummary;