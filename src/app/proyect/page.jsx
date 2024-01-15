import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Link href="/proyect/1"  className='font-bold text-[15px] text-sky-500 transition-all duration-150 hover:scale-105 cursor-pointer'>See me my 1 proyect ↘️</Link>
    </div>
  )
}

export default page