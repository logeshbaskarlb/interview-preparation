import { useEffect, useState } from 'react'
import axios from "axios"
 
function FetchingDataBreeds() {

  
  const [data, setdata] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(()=>{
    const fetchData = async () =>{
      setisLoading(true);
      try{
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");

        if(response.status !== 200 ){
          throw new Error('Network response was not ok')
        }

        const datas = await response.json();
        const list = Object.keys(datas.message || {});

        setdata(list)
        setisLoading(false)
      }catch{
        setError(error);
        setisLoading(false)
      }
    }
    fetchData()
  },[ ])     
  return (
    <div>
    <h1 className=''>Dog Breeds</h1>
    {isLoading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>Error: {error}</p>
    ) : (
      <ul>
        {data.map((breed, index) => (
          <li key={index}>{breed}</li>
        ))}
      </ul>
    )}
  </div>
  )
}

export default FetchingDataBreeds;
