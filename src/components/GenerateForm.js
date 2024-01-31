import React, { useEffect, useState } from "react";
import usStates from "./mockups/usStates";

const GenerateForm = ({ onChange, formData }) => {
  const [selectionCount, setSelectionCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSelection = (name, value) => {
    let isSelected = false;
    let wasSelected = false;

    if (name === "ageRange") {
      // Define what it means for the age range to be "selected"
      isSelected = value.ageRange.min !== 0 || value.ageRange.max !== 50;
      wasSelected = formData.ageRange.min !== 0 || formData.ageRange.max !== 50;
    } else {
      isSelected = value[name] !== "";
      wasSelected = formData[name] !== "";
    }

    if (isSelected && !wasSelected) {
      setSelectionCount((prevCount) => prevCount + 1);
    } else if (!isSelected && wasSelected) {
      setSelectionCount((prevCount) => prevCount - 1);
    }

    onChange(value);
  };

  const handleGenderChange = (event) => {
    handleSelection("selectedGender", { selectedGender: event.target.value });
  };

  const handleRoleChange = (event) => {
    handleSelection("selectedRole", { selectedRole: event.target.value });
  };

  const handleStateChange = (event) => {
    handleSelection("selectedState", { selectedState: event.target.value });
  };

  const handleGraphSelectedChange = (event) => {
    const shouldSelectGraph = event.target.checked && selectionCount >= 2;
    handleSelection("graphSelected", { graphSelected: shouldSelectGraph });
  };

  useEffect(() => {
    console.log(formData.graphSelected, "formData.graphSelected");
    if (selectionCount < 2 && formData.graphSelected) {
      console.log("here selectionCount < 2 && formData.graphSelected");
      handleSelection("graphSelected", { graphSelected: false });
    } else if (selectionCount >= 2 && formData.graphSelected) {
      console.log("here selectionCount >= 2 && formData.graphSelected");
      handleSelection("graphSelected", { graphSelected: true });
    }
  }, [selectionCount, formData.graphSelected]);

  const handleAgeChange = (event) => {
    const { name, value } = event.target;
    handleSelection("ageRange", {
      ageRange: {
        ...formData.ageRange,
        [name]: parseInt(value, 10),
      },
    });
  };

  useEffect(() => {
    setIsDisabled(selectionCount >= 2);
    if (selectionCount >= 2 && formData.graphSelected) {
      handleSelection("graphSelected", { graphSelected: true });
    } else {
      handleSelection("graphSelected", { graphSelected: false });
    }
  }, [selectionCount]);

  return (
    <div>
      <form class="w-full max-w-lg m-8">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Role
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={formData.selectedRole}
                onChange={handleRoleChange}
                disabled={isDisabled && !formData.selectedRole}
              >
                <option value="">Select</option>
                <option value="Developer">Developer</option>
                <option value="Manager">Manager</option>
                <option value="Designer">Designer</option>
              </select>
            </div>
          </div>

          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Role
            </label>
            <div class="relative">
              <label>
                Age Range: {formData.ageRange.min} - {formData.ageRange.max}
              </label>
              <div>
                <input
                  type="range"
                  name="min"
                  min="0"
                  max="100"
                  value={formData.ageRange.min}
                  onChange={handleAgeChange}
                  disabled={isDisabled && !formData.ageRange.min}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Gender
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                value={formData.selectedGender}
                onChange={handleGenderChange}
                disabled={isDisabled && !formData.selectedGender}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-2">
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-city"
            >
              City
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder="Albuquerque"
            />
          </div>
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              State
            </label>
            <div className="relative">
              <div className="max-h-32 overflow-y-auto">
                {" "}
                {/* Set a max height and enable vertical scrolling */}
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  {usStates.map((state, index) => (
                    <option key={index}>{state.label}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-zip"
            >
              Zip
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
              value={formData.selectedState}
              onChange={handleStateChange}
              disabled={isDisabled && !formData.selectedState}
            />
          </div>
        </div>
        <div className="w-full  mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            DISPLAY OPTIONS
          </label>
          <div className="flex space-x-4">
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                value={formData.graphSelected}
                onChange={handleGraphSelectedChange}
                disabled={selectionCount < 2 && !formData.graphSelected}
              />
              <label
                htmlFor="bordered-checkbox-1"
                className="py-4 px-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Graph
              </label>
            </div>
            <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
              <input
                id="bordered-checkbox-2"
                type="checkbox"
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bordered-checkbox-2"
                className="py-4 px-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Table
              </label>
              <div></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GenerateForm;
