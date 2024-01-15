import React from 'react'

const Modal = ({ setModal }) => {
  const close = () => {
    setModal()
  }
  return (
    <div className='absolute z-10 bg-slate-200 h-screen w-[100%] flex justify-center items-center' onClick={close}>
      <p className='text-[20px] font-bold'>About me</p>
      <div class="card">
        <img src="https://via.placeholder.com/300" alt="Card Image">
          <div class="card-content">
            <div class="card-title">Ingeniero de Software Junior</div>
            <div class="card-description">
              Estudiante de Ingeniería de Sistemas con experiencia en React, Angular y tecnologías backend.
            </div>
          </div>
          <div class="card-footer">
            <span>9º Ciclo</span>
            <a href="#">Más detalles</a>
          </div>
      </div>
    </div>
  )
}

export default Modal