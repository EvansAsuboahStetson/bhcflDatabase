import React, { useEffect, useState } from "react";
import GenerateForm from "../components/GenerateForm";
import Graph from "../components/graph";
import { data } from "../components/mockups/tableDataMockups";

const GenerateInformation = () => {
  // State object to hold form data
  const [formData, setFormData] = useState({
    selectedGender: "",
    selectedRole: "",
    selectedState: "",
    ageRange: { min: 0, max: 50 },
    graphSelected: false,
  });

  // Function to update the formData state
  const handleFormDataChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };


  const getSelectedDataKeys = () => {
    let keys = [];

    console.log(formData.selectedGender, "formData.selectedGender");
    console.log(formData.selectedRole, "formData.selectedRole");
    console.log(formData.selectedState, "formData.selectedState");
    console.log(formData.ageRange, "formData.ageRange");


    if (formData.selectedGender) keys.push('gender');
    if (formData.selectedRole) keys.push('role');
    if (formData.selectedState) keys.push('state');
    if (formData.ageRange) keys.push('age');
    // Assuming ageRange is always present, you might not include it
    // in the selection count. Add other fields if necessary.

    // Return only the first two keys


    return keys.slice(0, 2);
  };

  const selectedKeys = getSelectedDataKeys();

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl px-1 lg:max-w-4xl">
        <h1 className="text-center text-xl m-8 p-8">Generate Information</h1>
        <GenerateForm onChange={handleFormDataChange} formData={formData} />
        {formData?.graphSelected && (
          <Graph
            data={data}
            selectedGender={formData.selectedGender}
            ageRange={formData.ageRange}
            selectedRole={formData.selectedRole}
            selectedState={formData.selectedState}
            graphSelected={formData.graphSelected}
            chartType={"pie"}
            xDataKey={selectedKeys[0]}
            yDataKey={selectedKeys[1]}

          />
        )}
      </div>
    </div>
  );
};

export default GenerateInformation;
