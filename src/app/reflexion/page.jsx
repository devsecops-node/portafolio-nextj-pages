import Link from 'next/link'
import React from 'react'
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaAngular } from "react-icons/fa6";
import { SiNestjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";


const page = () => {
  return (
    <div className='min-h-screen flex gap-3 text-center'>
      <nav className='flex justify-center items-center p-4 bg-slate-100 shadow-lg shadow-slate-300'>
        <Link href="/" className='text-sky-500 font-bold transition-all duration-150 hover:scale-105 hover:font-bold'>Home ↗️</Link>
      </nav>
      <section className='flex justify-center items-center flex-1 gap-3'>
        <p className='font-bold recorrer recorrer'>My Apreciacion del curso</p>
        <div className='p-4 mr-4 ml-4'>
          <section className='fade-in'>
            <p>Desque que inicio el curso, sabia que me encataria ya que a la especialidad a la que me quiero dedicar es justo por el lado del <span className='font-bold text-blue-700'>Desarrollo de software</span>. En realidad estoy mas enfoca en otras tecologias como
              <span className='font-bold text-green-700 text-[12px]'> NodeJS</span> <span className='font-bold text-red-700 text-[12px]'>Angular</span> pero lo aprendido se transfiero, y en verdad me atrevo a decir que esta inscursion en el curso, me ayudo
              a explorar otras tecnologias que me encantaron, al usar <span className='font-bold text-[12px] text-gray-500'>Java</span> y <span className='font-bold text-[12px] text-green-400'> SpringBoot</span>. Aparte de ello, tambien me gusta mucho aprender otras
              tecnologias relacionas mas a <span className='font-bold text-blue-700'>DevOps</span> como el uso de <span className='font-bold text-[12px] text-sky-500'>Docker</span> <span className='text-bold text-blue-600 text-[12px]'> Kubernetes </span>
              y lo que es infraestructura como codigo.

            </p>
            <p>Simplemente me gusto todos los temas del curso, el desarrollo de las practicas ayudaron muchisimo a poner en practica la parte teorica. Los retos algunos fueron un poco complicados
              pero con buscar informacion, un poco de tutoriales es mas que suficiente para resolverlo.
            </p>
            <p>Lo que me causo si un mayor reto, fue el trabajo final, que fue desarrollar una aplicacion <span className='underline font-bold'>FullStack</span> ya que aqui pusimos a prueba
              todo lo aprendido en clase, el reto consistia en crear una aplicacion <span className='underline font-bold'>FullStack</span> usando <span className='font-bold text-[12px] text-gray-500'>Java</span> y <span className='font-bold text-[12px] text-green-400'> SpringBoot </span>
              al realizar un proyecto enfocado a una tienda virtual.
            </p>
          </section>
          <section className='flex gap-4 justify-center mt-4'>
            <a target='_blank' href="https://www.docker.com/" className='bg-[#f1f5f9] fade-in rounded-full p-2 flex items-center justify-center'>
              <FaDocker className='text-blue-600 text-[40px] ' />
            </a>
            <a target='_blank' href="https://kubernetes.io/docs/home/" className='bg-[#f1f5f9] fade-in rounded-full p-2 flex items-center justify-center'>
              <SiKubernetes className='text-[#326de6] text-[40px]' />

            </a>
            <a target='_blank' href="https://angular.dev/" className='bg-[#f1f5f9] fade-in rounded-full p-2 flex items-center justify-center'>
              <FaAngular className='text-red-600 text-[40px]' />
            </a>
            <a target='_blank' href="https://nestjs.com/" className='bg-[#f1f5f9] fade-in rounded-full p-2 flex items-center justify-center'>
              <SiNestjs className='text-[#e0234e] text-[40px]' />
            </a>
            <a target='_blank' href="https://nodejs.org/en" className='bg-[#f1f5f9] fade-in rounded-full p-2 flex items-center justify-center'>
              <FaNodeJs className='text-green-600 text-[40px]' />
            </a>
            <a target='_blank' href="https://nextjs.org/" className='bg-[#f1f5f9] fade-in rounded-full p-2 flex items-center justify-center'>
              <TbBrandNextjs className='text-black text-[40px]'/>
            </a>

          </section>
        </div>

      </section>
    </div>
  )
}

export default page