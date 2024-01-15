import React from 'react'

const Portada = () => {
  const showModal = () => {

  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <section className='flex justify-center flex-col items-center gap-4'>
        <p>I am <span className='text-[20px] font-bold'>Jordan Huaman</span> and I am <span className='text-[20px] font-bold'>Software Develovper</span></p>
        <p>If you want, you can see my description</p>
        <button onClick={showModal} className='bg-blue-600 p-2 rounded-md text-white hover:scale-105 duration-150 ease-in-out'>Descripcion</button>
      </section>
    </div>
  )
}

export default Portada