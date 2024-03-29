import React from "react";
import Select from "react-select";
import { useState } from "react";
import DeleteIcon from "./icon/deleteIcon";
const ClassInfo = ({
  classDetails,
  onAssignTeacher,
  onDeleteStudent,
  allStudents,
  onAddStudent,
}) => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const options = allStudents.map((student) => ({
    value: student.id,
    label: student.name,
  }));

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{classDetails?.name}</h2>
      <p>Teacher: {classDetails?.instructor}</p>
      <div className="flex items-center justify-start my-3 mx-3">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={() => onAssignTeacher(classDetails.id)}
        >
          Assign New Teacher
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <DeleteIcon />
        </button>
      </div>
      <Select // or <select> for simple dropdown
        className="my-3"
        value={options.find((option) => option.value === selectedStudent)}
        onChange={(option) => setSelectedStudent(option ? option.value : null)}
        options={options}
      />

      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => onAddStudent(classDetails.id, selectedStudent)}
      >
        Add Student
      </button>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Student Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {classDetails?.students.map((student) => (
            <tr key={student.id}>
              <td className="border px-4 py-2">{student.name}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onDeleteStudent(classDetails.id, student.id)}
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassInfo;
