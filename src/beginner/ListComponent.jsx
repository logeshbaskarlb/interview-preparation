
// List Component: Construct a component to display a list of items.
import React from 'react'

const ListComponent = () => {


    const list = ["Apple", "Orange" , "Grape" , "PineApple" , "PineOrange" , "Banana"]  ;

  return (
    <div className=''>
      {list.map((item,i)=>(
        <li key={i}>{item}</li>
      ))}
    </div>
  )
}

export default ListComponent
