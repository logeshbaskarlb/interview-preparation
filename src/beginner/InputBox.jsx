
// Real-time Input: Create a form that captures user input and displays it in real-time as the user types.

import React, { useState } from 'react'

const InputBox = () => {

  const [input, setinput] = useState("")

   const data = (e) =>{
      setinput(e.target.value)
   };

  return (
    <div>
      <input 
      type="text" 
      placeholder='type something...' 
      onChange={data} 
      value={input}/>
      <button 
      className=' bg-rose-500 text-white gap-2 p-2 rounded-md'
      onClick={()=> alert(data)} >Submit</button>
      <h1>{input}</h1>
    </div>
  )
}

export default InputBox
