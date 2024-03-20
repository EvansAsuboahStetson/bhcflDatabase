import React from "react";

const Filter = ({ onClose, data, onFilter,onReset}) => {
  const [zipCode, setZipCode] = React.useState("");
  const [role, setRole] = React.useState("");
  const [age, setAge] = React.useState("");

  const handleZipCodeChange = (e) => setZipCode(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);


  const applyFilters = () => {
    const filteredData = data.filter((item) => {
      console.log(item.zipCode===zipCode);
      return (
        (!zipCode || item.zipCode === zipCode) &&
        (!role || item?.role.toLowerCase() === role.toLowerCase()) &&
        (!age || item.age === Number(age))
      );
    });

    onFilter(filteredData);
    
  };

  const resetFilters = () => {
    console.log(data, "data filter before reset", onFilter);
    setZipCode("");
    setRole("");
    setAge("");
    onReset();

  
  };

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="m-2">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={onClose}
      ></div>

      {/* Filter Modal */}
      <div className="fixed inset-0 z-20 overflow-y-auto" onClick={onClose}>
        <div className="flex items-center justify-center min-h-full p-4 text-center sm:block sm:p-0">
          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            onClick={handleModalClick}
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h2 className="text-stone-700 text-xl font-bold">
                Apply filters
              </h2>
              <p className="mt-1 text-sm">
                Use filters to further refine search
              </p>
              {/* Form fields */}
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div class="flex flex-col">
                  <label for="name" class="text-stone-600 text-sm font-medium">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Zip Code"
                    value={zipCode}
                    onChange={handleZipCodeChange}
                    class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div class="flex flex-col">
                  <label
                    for="manufacturer"
                    class="text-stone-600 text-sm font-medium"
                  >
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    placeholder="Enter Role"
                    value={role}
                    onChange={handleRoleChange}
                    class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
                <div class="flex flex-col">
                  <label for="name" class="text-stone-600 text-sm font-medium">
                    Age
                  </label>
                  <input
                    type="number"
                    id="number-input"
                    aria-describedby="helper-text-explanation"
                    placeholder="5"
                    value={age}
                    onChange={handleAgeChange}
                    min="1"
                    max="100"
                    class="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button
                  className="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90"
                  onClick={resetFilters}
                >
                  Resets
                </button>
                <button
                  className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
                  onClick={applyFilters}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
