import React from 'react'

const Modal = ({ setModal }) => {
  const close = () => {
    setModal()
  }
  return (
    <div className='absolute z-10 bg-slate-200 h-screen w-[100%] flex justify-center items-center' onClick={close}>
      <p>About me</p>
    </div>
  )
}

export default Modal