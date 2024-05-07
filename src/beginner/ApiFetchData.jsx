import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiFetchData = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(null);
  const [input, setinput] = useState("");

  const API = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    setIsLoading(true);
    seterror(null);

    try {
      const result = await axios.get(`${API}/${input}`);
      setData(result.data);
      setIsLoading(false);
    } catch (error) {
      seterror(error.message);
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <p>API fetchh data</p>
      <input
        type="text"
        value={ input }
        onChange={(e) => setinput(e.target.value)}
        placeholder="Enter user id"
      />
      <button 
      className=' bg-rose-500 text-white gap-2 p-2 rounded-md' 
      onClick={handleSubmit}>Submit</button>

      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          {data ? (
            <div>
              <h3>User Details</h3>
              <pre>{JSON.stringify(data,null,2)}</pre>
            </div>
          ) : (
            <p>No user data found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ApiFetchData;
