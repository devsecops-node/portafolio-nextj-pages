import React from 'react'
import stles from "@/styles/dashboard.module.css"
import Portada from './Portada'

const Dashboard = () => {
  return (
    <section className={stles.home_view}>
      <div className='h-screen flex justify-between items-center'>
        <div className={stles.home_view_principal}>
          <p className={stles.animar_text} id='detec'> Hey, I am <span className="animacion-bolder">Jordan
            Huaman</span>, I am asphiring to <span className={stles.detect}>Software Enginiering</span>
          </p>
        </div>
        <div className={stles.home_view_links}>
          <a href="" className={stles.animar_abajo}>
            <p>Portada</p>
          </a>
          <a href="" className={stles.animar_abajo}>
            <p>Bienvenida Introduccion</p>
          </a>
          <a href="" className={stles.animar_arriba}>
            <p>Tabla de contenido</p>
          </a><a href="" className={stles.animar_arriba}>
            <p>Informacion sobre mi</p>
          </a>
          <a href="" className={stles.animar_abajo}>
            <p>Trabajos realizados</p>
          </a>

        </div>
        <div>
        </div>
      </div>
      <Portada />
    </section>
  )
}

export default Dashboard