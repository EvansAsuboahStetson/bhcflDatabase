import React from "react";
import ViewTable from "./viewTable";

export default function Modal({ showModal, setShowModal, title, content, onCancel, handleAction, selectedRow }) {
    const convertStringToObject = (string) => {
        const jsonObject = JSON.parse(string);
        return jsonObject;
    }

    return (
        <>
            {showModal ? (
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full max-w-md my-6 mx-auto">
                        {/* content */}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/* header */}
                            <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                                <h3 className="text-2xl font-semibold">
                                    {title}
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={onCancel}
                                >
                                    <span className="text-black h-6 w-20 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            {/* body */}
                            <div className="relative p-2 m-4 flex-auto">
                                <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                    {title === 'View Item' ? 
                                        <ViewTable data={convertStringToObject(content)} />
                                        : content}
                                </p>
                            </div>
                            {/* footer */}
                            <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={onCancel}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => handleAction(selectedRow, 'modalConfirmation')}
                                >
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

