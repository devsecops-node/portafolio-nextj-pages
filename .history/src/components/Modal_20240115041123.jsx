import React from 'react'

const Modal = ({ setModal }) => {
  const close = () => {
    setModal()
  }
  return (
    <div className='absolute z-10 bg-slate-200 h-screen w-[100%] flex flex-col justify-center items-center' onClick={close}>
      <p className='text-[20px] font-bold'>About me</p>
      <div class="card">
          <p>Educación:</p>
          <li>
            <u></u>
          </li>
      </div>
    </div>
  )
}

export default Modal