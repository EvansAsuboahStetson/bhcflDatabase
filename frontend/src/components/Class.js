import React, { useState } from 'react';
import Modal from './modal';
import CreateClassForm from './createClass';

const Class = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSaveClass = (classData) => {
    console.log(classData);
    setFormSubmitted(true); // You can use this state to trigger form submission
    setIsModalOpen(false);
  };

  return (
    <div>
      <button className='active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90' onClick={() => setIsModalOpen(true)}>Add New Class</button>
      {isModalOpen && (
        <Modal
          showModal={isModalOpen}
          setShowModal={setIsModalOpen}
          title="Create New Class"
          content={<CreateClassForm  onSave={()=>{}}/>}
          onCancel={() => setIsModalOpen(false)}
          handleAction={handleSaveClass}
          selectedRow={null} // selectedRow isn't needed for creating a class
        />
      )}
    </div>
  );
};

export default Class;
