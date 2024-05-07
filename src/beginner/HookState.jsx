import React, { useEffect, useState } from "react";

function HookState() {
  //   const [stateVariable ,setStateVariable]=useState(initial values)
  const [count, setCount] = useState(0);
  const [click,setClick] = useState("")
  // useEffect

  useEffect(()=>{
    document.title = `Count : ${count}`;
  },[count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };


  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const clickedButton = () =>{
    if(click === ""){
      setClick("Clicked")
    }else{
      setClick("")
    }
  }


  return (

//     “Hello World” Component: Start with the basics. Create a simple React component that renders “Hello, World!”

// Counter App: Build a counter application with buttons to increment and decrement the count.

    <>
    <div>

      <h6 > <u>UseState hook</u></h6>
      <article>
        <div>
        <p> You have clicked {count} .</p>
        <button 
        className=' bg-rose-500 text-white gap-2 p-2 rounded-md'onClick={handleIncrement}>+</button>
        <button 
        className=' bg-rose-500 text-white gap-2 p-2 rounded-md'onClick={handleDecrement}>-</button>
        <p>Click the button</p>
        <h4>{click}</h4>
        <button 
        className=' bg-rose-500 text-white gap-2 p-2 rounded-md'
        onClick={ clickedButton  }>Button</button>
        </div>
      </article>
    </div>
    </>
  );
}

export default HookState;
