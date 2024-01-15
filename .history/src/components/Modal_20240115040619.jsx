import React from 'react'

const Modal = ({setModal}) => {
  const close =()=>{
    setModal()
  }
  return (
    <div className='absolute z-10' onClick={close}>
      <p>About me</p>
    </div>
  )
}

export default Modal