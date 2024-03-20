import donations from "../components/mockups/donations";
import DonationList from "../components/DonationList";
import React, { useReducer, useState} from "react";
import Modal from "../components/modal"; // Ensure this is the correct path to your Modal component
import useModalReducer from "../utils/useModalReducer";
import DonationEntryForm from "../components/donationEntryForm";
import DonationSummary from "../components/donationSummary";
import DonationDetail from "../components/DonationDetail";

const DonationPage = () => {
    const modalInitialState = {
        showModal: false,
        modalContent: null,
        modalTitle: "",
        rowData: null,
    };
    // ... existing state and functions
    const [modalstate, modaldispatch] = useReducer(useModalReducer, modalInitialState);
    const [selectedDonation, setSelectedDonation] = useState(null);
 
    const handleCancel = () => {
        modaldispatch({ type: "modalCancel" });
     
      };

      const handleEditDonation = (donation) => {
        // Logic to edit the selected donation
        // This might involve opening another modal with a form
    };
    
    const handleDeleteDonation = (donationId) => {
        // Logic to delete the selected donation
        // Make sure to ask for confirmation before deletion
    };
    

  
    const openDonationModal = () => {
      modaldispatch({
        type: "openDonationModal",
        payload: {
          modalTitle: "Add New Donation",
          modalContent: <DonationEntryForm onSubmit={handleAddDonation} />,
        },
      });
    };
    const onDonationSelect = (donation) => {
        setSelectedDonation(donation);
        modaldispatch({
            type: "openSelectedDonationModal",
            payload: {
                modalTitle: "Edit Donation",
                modalContent: (
                    <DonationEntryForm  initialData={donation}/>
                ),
            },
        });
    };
  
    const handleAddDonation = (donationData) => {
      console.log(donationData);
      // TODO: Process the donation data, e.g., update state, make API call
      modaldispatch({ type: "closeModal" });
    };

    return (
        <div className="flex flex-col items-center justify-center m-10">
            <button 
                className="mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={openDonationModal}
            >
                Add Donation
            </button>

            <div className="w-full mb-4 max-w-4xl"> {/* Adjust the max-width as needed */}
                <DonationSummary donations={donations} />
            </div>

            <div className="w-full max-w-4xl"> {/* Adjust the max-width as needed */}
                <DonationList donations={donations} onDonationSelect={onDonationSelect}/>
            </div>

            {modalstate.showModal && (
                <Modal
                    showModal={modalstate.showModal}
                    setShowModal={() => modaldispatch({ type: "closeModal" })}
                    title={modalstate.modalTitle}
                    content={modalstate.modalContent}
                    onCancel={handleCancel}
                />
            )}
        </div>
    );
};

export default DonationPage;