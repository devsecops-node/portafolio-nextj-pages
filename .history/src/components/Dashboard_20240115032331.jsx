import React from 'react'
import stles from "@/styles/dashboard.module.css"

const Dashboard = () => {
  return (
    <section class="home-view">
      <div class="home-view_principal">
        <p class="animar-text" id='detec'> Hey, I am <span class="animacion-bolder">Jordan
          Huaman</span>, I am asphiring to <span class="detect">Software Enginiering</span>
        </p>
      </div>
      <div class="home-view_links">
        <a href="">
          <p>Portada</p>
        </a>
        <a href="">
          <p>Bienvenida Introduccion</p>
        </a>
        <a href="">
          <p>Tabla de contenido</p>
        </a><a href="">
          <p>Informacion sobre mi</p>
        </a>
        <a href="">
          <p>Trabajos realizados</p>
        </a>

      </div>
      <div>

      </div>
    </section>
  )
}

export default Dashboard