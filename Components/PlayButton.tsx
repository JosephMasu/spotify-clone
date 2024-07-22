import React from 'react'
import { FaPlay } from 'react-icons/fa'

const PlayButton =() =>{
  return (
    <button 
    className='
    transition
    opacity-0
    rounded-full
    flex
    items-center
    bg-green-500
    p-4
    drop-shadow-sm
    translate
    transalate-y-1/4
    group-hover:opacity-90
    group-hover:transalate-y-0
    hover:scale-110'
   >
        <FaPlay />
    </button>
)
}

export default PlayButton
