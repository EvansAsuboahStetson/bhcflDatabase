import React from "react";
import classList from "./mockups/classList";

const ClassCard = ({ classInfo }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{classInfo.name}</div>
        <p className="text-gray-700 text-base">{classInfo.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Instructor: {classInfo.instructor}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Schedule: {classInfo.schedule}
        </span>
      </div>
    </div>
  );
};

const ClassList = ({ classes, onClassSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {classList.map((classInfo) => (
        <div
          key={classInfo.id}
          onClick={() => onClassSelect(classInfo)}
          className="cursor-pointer" // Add more styling as needed
        >
          <ClassCard key={classInfo.id} classInfo={classInfo} />
        </div>
      ))}
    </div>
  );
};

export default ClassList;
