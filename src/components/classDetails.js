const ClassInfo = ({ classDetails, onAssignTeacher, onDeleteStudent }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-4">{classDetails?.name}</h2>
            <p>Teacher: {classDetails?.instructor}</p>
            <button 
                className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => onAssignTeacher(classDetails.id)}
            >
                Assign New Teacher
            </button>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Student Name</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {classDetails?.students.map(student => (
                        <tr key={student.id}>
                            <td className="border px-4 py-2">{student.name}</td>
                            <td className="border px-4 py-2">
                                <button 
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                                    onClick={() => onDeleteStudent(classDetails.id, student.id)}
                                >
                                    Delete
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