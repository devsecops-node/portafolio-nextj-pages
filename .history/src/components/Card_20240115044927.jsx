import React from 'react'

const Card = ({proyect}) => {
  return (
    <section className='bg-slate-300'>
      <img src="" alt="imagen-semana" width={100} height={100} className='bg-slate-400' />
      <div>
        <p>Semana</p>
        <p className=''>{proyect.semana}</p>
      </div>
      <div>
        <p>Clase</p>
        <p className=''>{proyect.semana}</p>
      </div>
      <div>
        <p>Semana</p>
        <p className=''>{proyect.semana}</p>
      </div>
      <div>
        <p>Semana</p>
        <p className=''>{proyect.semana}</p>
      </div>
    </section>
  )
}

export default Card