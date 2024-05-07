import React, { useState } from 'react'

const DynamicBackground = () => {
  const [bgColor, setbgColor] = useState("#ffffff")

  const handleClick = () => {
    const randomColor = generateRandomColor()
    setbgColor(randomColor)
  }

  const generateRandomColor = () =>{
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
    return randomColor
  }

  return (
    <div style={{backgroundColor : bgColor}}>
        <p>Dynamic background changer</p>
        
        <button 
        className=' bg-rose-500 text-white gap-2 p-2 rounded-md'
        onClick={handleClick}>Click</button>
      
    </div>
  )
}

export default DynamicBackground
