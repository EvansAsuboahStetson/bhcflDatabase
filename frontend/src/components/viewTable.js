import React from 'react';

const ViewTable = ({ data }) => {
  const headers = Object.keys(data);
  console.log(headers,"Header");

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase sm:px-6 sm:py-3">
                      {header}
                    </th>
                  ))}
                  <th scope="col" className="px-3 py-2 text-right text-xs font-medium text-gray-500 uppercase sm:px-6 sm:py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  {headers.map((key, index) => (
                    <td key={index} className="px-3 py-2 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 sm:px-6 sm:py-4">
                      {data[key]}
                    </td>
                  ))}
                  <td className="px-3 py-2 whitespace-nowrap text-right text-sm font-medium sm:px-6 sm:py-4">
                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTable;
