import React from 'react'

const Card = ({ proyect }) => {
  return (
    <section className='bg-slate-300'>
      <img src="" alt="imagen-semana" width={100} height={100} className='bg-slate-400' />
      <div>
        <p>Semana</p>
        <p className=''>{proyect.semana}</p>
      </div>
      <div>
        <p>Clase</p>
        <p className=''>{proyect.resumen_de_clase}</p>
      </div>
      <div>
        <p>Reflexion</p>
        <p className=''>{proyect.reflexion}...</p>
      </div>
      <div>
        <p>Tecnologias Usadas</p>
        <div className='flex gap-2'>
          {proyect.tecnologias_usadas.map(tec => <p className='text-[10px]'>{tec}</p>)}
        </div>
      </div>
    </section>
  )
}

export default Card