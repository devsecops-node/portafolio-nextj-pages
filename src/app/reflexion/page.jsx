import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen '>
      <nav className='flex justify-center items-center p-4 bg-slate-100 shadow-lg shadow-slate-300'>
        <Link href="/" className='text-sky-500 font-bold transition-all duration-150 hover:scale-105 hover:font-bold'>Home ↗️</Link>
      </nav>
    </div>
  )
}

export default page