import React from 'react'
import { IoReload } from "react-icons/io5";


const LoadMore = ({ loadM }) => {
  const hanldeLoad = () => {
    loadM()
  }
  return (
    <div onClick={hanldeLoad} className='flex justify-center items-center w-[60px] hover:font-bold transition-all duration-150 hover:scale-105 flex-col bg-slate-200 rounded-md'>
      <p className='text-[10px]'>Load More</p>
      <IoReload className='text-[20px] font-bold'/>
    </div>
  )
}

export default LoadMore