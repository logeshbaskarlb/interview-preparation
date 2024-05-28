import React, { useEffect, useRef, useState } from 'react'

const StopWatch = () => {

    /*
    first start run using state
    then create a reference for the timer id 
    and initialize it to null in useRef hook.
    
    */
    const [isRunning, setisRunning] = useState(false)
    const [elapsedTime, setelapsedTime] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        return () => {
          clearInterval(intervalRef.current); // Cleanup interval on component unmount
        };
      }, []);

    const handleStart = () =>{
        if (!isRunning) {
            const startTime = Date.now() - elapsedTime;
            intervalRef.current = setInterval(()=>{
                const now = Date.now()
                setelapsedTime(now-startTime)
            },10);
            setisRunning(true)
        }
    }

    const handleStop = () => {
        if (isRunning) {
            clearInterval(intervalRef.current)
            setisRunning(false)
        }
    }

    const handleReset = () => {
       
            clearInterval(intervalRef.current)
            setisRunning(false)
            setelapsedTime(0)
    }

    const formatTime = (milliseconds) =>{
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes =  Math.floor(totalSeconds / 60)
        const seconds = totalSeconds % 60;
        const millis = Math.floor((milliseconds % 1000) / 10 )

        return `${minutes} : ${String(seconds).padStart(2, '0')}.${String(millis).padStart(2, '0')}`
    }

  return (
    <div>

        <h1>StopWatch</h1>
        <p>{formatTime(elapsedTime)}</p>
<div className=''>

        <button 
        className=' mr-3 bg-rose-500 text-white gap-2 p-2 rounded-md'
        onClick={handleStart}>Start</button>
        <button 
        className='mr-3 bg-rose-500 text-white gap-2 p-2 rounded-md'
        onClick={handleStop}>Stop</button>
        <button 
        className=' bg-rose-500 text-white gap-2 p-2 rounded-md'
        onClick={handleReset}>Reset</button>
        </div>
        <br />
        {/* <Timer /> */}
    </div>
  )
}

// 
// export const Timer = () =>{
//     const [timer, settimer] = useState(0)
//     return (
//         <>
//         Hello
//         <button>Start</button>
//         </>
//     )
// }

export default StopWatch
