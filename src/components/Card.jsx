import React from 'react'
import Link from 'next/link'
import styles from "@/styles/card.module.css"

const Card = ({ proyect }) => {
  return (
    <Link href={`/proyect/${proyect.id}`} className='p-2 flex flex-col gap-1 rounded-md transition-all duration-150 hover:scale-105 ease-in-out hover:z-20 hover:border cursor-pointer'>
      <div className={styles.card}>
        <div className={styles.card_img}><div></div></div>
        <div className={styles.card_title}>Product title</div>
        <div className={styles.card_subtitle}>Product description. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        <hr className={styles.card_divider} />
        <div className={styles.card_footer}>
          <div className={styles.card_price}><span>$</span> 123.45</div>
          <button className={styles.card_btn}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z"></path><path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z"></path><path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z"></path></svg>
          </button>
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