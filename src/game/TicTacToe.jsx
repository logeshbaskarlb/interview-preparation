import React, { useState } from 'react'
import   './TicTacToe.css'

const initialBoard = () => Array(9).fill(null)
const TicTacToe = () => {

    const [board, setboard] = useState(initialBoard())
    console.log(board);

  return (
    <div className='status'>
      Player X tutrn 
      <button className=' bg-rose-500 text-white gap-2 p-2 rounded-md'>Rest Game</button>

      <div className='board'>
        {
            board.map((_,i) => {
                return <button className=' bg-rose-500 text-white gap-2 p-2 rounded-md cell' key={i}>
                    X
                </button>
            })
        }
      </div>
    </div>
  )
}

export default TicTacToe
