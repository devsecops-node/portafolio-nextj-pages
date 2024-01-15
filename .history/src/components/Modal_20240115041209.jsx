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
          <u className='line-clamp-3'>Estudiante de Ingeniería de Sistemas en el 9º ciclo, lo que sugiere un conocimiento sólido en teoría y práctica de la ingeniería de software y sistemas.</u>
        </li>
      </div>
    </div>
  )
}

export default Modal