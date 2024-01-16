import React from 'react'
import Link from 'next/link'
import styles from "@/styles/card.module.css"

const Card = ({ proyect }) => {
  const probando = ()=>{
    console.log("Qwee")
  }
  return (
    <Link onTouchMove={probando} href={`/proyect/${proyect.id}`} className='p-2 flex flex-col gap-1 rounded-md transition-all duration-150 hover:scale-105 ease-in-out hover:z-20 hover:border cursor-pointer'>
      <div className={styles.card}>
        <div className={styles.card_img}>
          <img src={proyect.imagen} alt="imagen not found" width={70} height={70} />
        </div>
        <div className={styles.card_title}>Product {proyect.proyecto}</div>
        <div className={styles.card_subtitle}>{proyect.resumen_de_clase}</div>
        <hr className={styles.card_divider} />
        <div className={styles.card_footer}>
            {proyect.tecnologias_usadas.map(tec => <p className='text-[6px] bg-sky-800 text-white p-1 rounded-full text-center'>{tec}</p>)}
        </div>
      </div>
    </Link>
  )
}

export default Card
{/* <img src={proyect.imagen} alt="imagen-semana" width={100} className='bg-slate-400 flex rounded-md' />
      <div className='flex justify-center items-center gap-3'>
        <p className='font-bold'>Semana</p>
        <p className='text-[10px]'>{proyect.semana}</p>
      </div>
      <div>
        <p className='font-bold'>Clase</p>
        <p className='text-[10px]'>{proyect.resumen_de_clase}</p>
      </div>
      <div>
        <p className='font-bold'>Reflexion</p>
        <p className='text-[10px]'>{proyect.reflexion}...</p>
      </div>
      <div className='mt-auto'>
        <p className='font-bold'>Tecnologias Usadas</p>
        <div className='flex gap-2'>
          {proyect.tecnologias_usadas.map(tec => <p className='text-[10px] bg-sky-800 text-white p-1 rounded-full text-center'>{tec}</p>)}
        </div>
      </div> */}