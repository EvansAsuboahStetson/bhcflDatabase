import React from 'react';



const Table = ({ data, columns, updateInfo, updateInfoFunctionList,actionFunction }) => {
  console.log(data)
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-full border-collapse">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="bg-gray-100 p-2 border">
                {column.title}
              </th>
            ))}
            {updateInfo && <th className="bg-gray-100 p-2 border" colSpan="2">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
               <td key={colIndex} className="p-2 border">
               {/* Check if the value is a boolean and convert it to a string */}
               {typeof row[column.dataIndex] === 'boolean'
                   ? row[column.dataIndex].toString()
                   : column.dataIndex === 'birthday'  // Assuming 'date' is the key for your date data
                       ? new Date(row[column.dataIndex]).toLocaleDateString('en-US', {
                           year: 'numeric',
                           month: 'long',
                           day: 'numeric'
                         })
                       : row[column.dataIndex]
               }
           </td>
              ))}
              {updateInfo && (
                <React.Fragment>
                    {updateInfoFunctionList.map((updateInfoFunctionListItem, updateInfoFunctionListIndex) => (
                      <td className="p-2 border">
                        <button onClick={() => actionFunction(row, updateInfoFunctionListItem.name)}>{updateInfoFunctionListItem?.icon}</button>
                      </td>
                    ))}
                 
                </React.Fragment>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
