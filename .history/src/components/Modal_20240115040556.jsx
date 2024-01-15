import React from 'react'

const Modal = ({setModal}) => {
  return (
    <div className='absolute z-10' onClick={closeModal}>
      <p>About me</p>
    </div>
  )
}

export default Modal