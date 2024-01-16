import React, { useEffect } from 'react'
import stles from "@/styles/dashboard.module.css"
import Portada from './Portada'
import { useRef } from 'react'
import Proyects from './Proyects'

const Dashboard = () => {

  useEffect(() => {
    const hiddenElements = document.querySelectorAll('.otro')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        } else {
          entry.target.classList.remove('show')
        }
      })
    })
    hiddenElements.forEach((el) => observer.observe(el))
    console.log(hiddenElements)
  }, [])

  const scrollToPortada = () => {
    const portada = document.getElementById('portada')

    if (portada) {
      console.log('ejecutando id')
      portada.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProyects = () => {
    const portada = document.getElementById('proyects')

    if (portada) {
      console.log('ejecutando id')
      portada.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className={stles.home_view}>
      <div className='h-screen flex justify-center flex-col items-center otro'>
        <div className={stles.home_view_principal}>
          <p className={stles.animar_text} id='detec'> Hey, I am <span className="animacion-bolder">Jordan
            Huaman</span>, I am asphiring to <span className={stles.detect}>Software Enginiering</span>
          </p>
        </div>
        <div className={stles.home_view_links}>
          <a onClick={scrollToPortada} className={stles.animar_abajo}>
            <p className='animate-bounce transition-all hover:font-bold duration-150 hover:scale-105'>Portada</p>
          </a>
          <a onClick={scrollToProyects} className={stles.animar_abajo}>
            <p className='animate-bounce transition-all hover:font-bold duration-150 hover:scale-105'>Trabajos realizados</p>
          </a>
        </div>
      </div>

      <section id='portada' className='otro bg-red-400'>
        <Portada scrolProyects={scrollToProyects} />
      </section>
      <section id='proyects' className='otro '>
        <Proyects />
      </section>

    </section>
  )
}

export default Dashboard