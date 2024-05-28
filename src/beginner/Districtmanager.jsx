import React, { useState } from "react";

function DistrictManager() {
  const [states, setStates] = useState([
    {
      state: "California",
      districts: ["Los Angeles", "San Francisco", "San Diego"],
    },
    { state: "Texas", districts: ["Dallas", "Houston", "Austin"] },
    { state: "New York", districts: ["Manhattan", "Brooklyn", "Queens"] },
  ]);
  const [newDistrict, setNewDistrict] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // Function to add a district to a particular state
  const addDistrict = () => {
    if (selectedState && newDistrict) {
      setStates((prevStates) => {
        const newState = [...prevStates];
        const stateIndex = newState.findIndex(
          (state) => state.state === selectedState
        );
        if (
          stateIndex !== -1 &&
          !newState[stateIndex].districts.includes(newDistrict)
        ) {
          newState[stateIndex].districts.push(newDistrict);
        } else if (stateIndex === -1) {
          newState.push({ state: selectedState, districts: [newDistrict] });
        }
        return newState;
      });
      setNewDistrict("");
    }
  };
  
  // Function to remove a district from a particular state
  const removeDistrict = (stateName, districtName) => {
    setStates((prevStates) => {
      const newState = [...prevStates];
      const stateIndex = newState.findIndex(
        (state) => state.state === stateName
      );
      if (stateIndex !== -1) {
        newState[stateIndex].districts = newState[stateIndex].districts.filter(
          (district) => district !== districtName
        );
      }
      return newState;
    });
  };

  return (
    <div>
      <h2>District Manager</h2>
      <div>
        <input
        className=" "
          type="text"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          placeholder="Enter state name"
        />
        <br />
        <input
          type="text"
          value={newDistrict}
          onChange={(e) => setNewDistrict(e.target.value)}
          placeholder="Enter new district name"
        />
        <button 
        className=" bg-green-600 p-2 rounded-lg"
        onClick={addDistrict}>Add District</button>
      </div>
      <ul className=" gap-2">
        {states.map((state) => (
          <li key={state.state} className=" gap-2">
            <strong>{state.state}</strong>:
            {state.districts.map((district) => (
              <span key={district}>
                {district}{" "}
                <button
                  onClick={() => removeDistrict(state.state, district)}
                  className=" bg-red-400 text-white rounded-md p-2"
                >
                  Remove
                </button>
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DistrictManager;
