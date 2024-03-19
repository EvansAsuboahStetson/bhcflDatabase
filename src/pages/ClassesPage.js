import React, { useReducer } from "react";
import ClassList from "../components/classes";
import Class from "../components/Class";
import ClassInfo from "../components/classDetails";
import Modal from "../components/modal"; // Ensure this is the correct path to your Modal component
import useModalReducer from "../utils/useModalReducer";
import classList from "../components/mockups/classList";
import { data, columns } from "../components/mockups/tableDataMockups"

const ClassesPage = () => {
    const modalInitialState = {
        showModal: false,
        modalContent: null,
        modalTitle: "",
        rowData: null,
    };

    const [modalstate, modaldispatch] = useReducer(useModalReducer, modalInitialState);

    const handleClassSelect = (classInfo) => {
        modaldispatch({
            type: "openClassInfoModal",
            payload: {
                modalTitle: "Class Information",
                modalContent: <ClassInfo classDetails={classInfo} onAssignTeacher={handleCancel} onDeleteStudent={handleCancel} allStudents={data}/>,
            },
        });
    };
    const handleCancel = () => {
        modaldispatch({ type: "modalCancel" });
     
      };

    return (
        <div className="flex flex-col items-start m-10">
            <div className="w-full mb-4">
                <Class />
            </div>
            <div className="w-full">
                <ClassList onClassSelect={handleClassSelect} />
            </div>
            {modalstate.showModal && (
                <Modal 
                    showModal={modalstate.showModal}
                    setShowModal={() => modaldispatch({ type: "closeModal" })}
                    title={modalstate.modalTitle}
                    content={modalstate.modalContent}
                    onCancel={handleCancel}
                    handleAction={handleCancel}
                />
            )}
        </div>
    );
};

export default ClassesPage;
