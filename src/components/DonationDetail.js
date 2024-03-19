const DonationDetail = ({ donation, onEdit, onDelete }) => {
    return (
        <div className="bg-white p-4 rounded-lg ">
            <p className="text-lg font-semibold mb-2">Donor Name: <span className="font-normal">{donation.donorName}</span></p>
            <p className="text-lg font-semibold mb-2">Amount: <span className="font-normal">${donation.amount}</span></p>
            <p className="text-lg font-semibold mb-2">Date: <span className="font-normal">{new Date(donation.date).toLocaleDateString()}</span></p>
            <p className="text-lg font-semibold mb-4">Purpose: <span className="font-normal">{donation.purpose}</span></p>
            <div className="flex justify-end gap-2">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onEdit(donation)}
                >
                    Edit
                </button>
                <button 
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => onDelete(donation.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default DonationDetail;
