import React, { useState } from "react";

const DynamicForm = () => {
  const [fields, setfields] = useState([{ value: "" }]);

  const handleAddField = () => {
    setfields([...fields, { value: "" }]);
  };

  const handleChange = (index, event) => {
    const newFields = [...fields];
    newFields[index].value = event.target.value;
    setfields(newFields);
  };

  const handleRemoveFields = (index) => {
    const newFields = [...fields];
    newFields.splice(index, 1);
    setfields(newFields);
  };

  const handleSubmit = () => {
    console.log("form", fields);
  };

  return (
    <div>
      <h2 className=" text-3xl">Dynamic form</h2>
      <form action="">
        {fields.map((field, index) => (
          <div className=" inputField" key={index}>
            <input
            value={field.value}
            onChange={(e)=>handleChange(index,e)}
              type="text"
              placeholder="Type...."
              className=" border border-spacing-1"
            />
            <button 
            onClick={()=>handleRemoveFields(index)}
            type="button" className=" bg-gray-400">
              Remove
            </button>
          </div>
        ))}
      </form>
      <button type="button" onClick={handleAddField} className=" bg-gray-400 mr-3 p-1 mt-3 rounded-lg">
        Add Input
      </button>
      <button type="button" onClick={handleSubmit} className=" bg-gray-400 mr-3 p-1 mt-3 rounded-lg">
        Submit
      </button>
    </div>
  );
};

export default DynamicForm;
