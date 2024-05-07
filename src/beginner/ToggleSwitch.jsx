import React, { useEffect, useState } from 'react'


const ToggleSwitch = () => {

const [theme, settheme] = useState("light")

const handleClick = () => {
settheme(theme === "light" ? "dark" : "light")
}

  return (
    <>
    <div className={`App ${theme}`}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis dolorum aut id consequatur ad est minus doloribus, sed eaque.</p>
      <button 
      className=' bg-rose-500 text-white gap-2 p-2 rounded-md'
      onClick={handleClick}>Toogle Theme </button>
    </div>
    </>
  )
}



export default ToggleSwitch
