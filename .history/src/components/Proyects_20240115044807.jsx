import React from 'react'
import Card from './Card';
import styles from '@/styles/proyectos.module.css'

const Proyects = () => {
  const planDeEstudios = [
    {
      semana: 1,
      tecnologias_usadas: [
        "Fundamentos de tecnologías web",
        "DNS",
        "Protocolo TCP/IP",
        "Protocolo HTTP"
      ],
      reflexion: "Roles en el desarrollo de Aplicaciones para Internet",
      proyecto: "Desarrollo de una aplicación web",
      resumen_de_clase: "Herramienta de desarrollo - Visual Studio Code"
    },
    {
      semana: 2,
      tecnologias_usadas: ["HTML", "XML", "SEO", "CSS3"],
      reflexion: "Estructura HTML y XML, Árbol DOM, Renderizado de Árbol",
      proyecto: "Diseño de una página web",
      resumen_de_clase: "Diseño flexbox, diseño fluido y diseño responsivo"
    },
    {
      semana: 3,
      tecnologias_usadas: ["Bootstrap", "Tailwind"],
      reflexion: "Desarrollo de una página web Front-End con Librerías CSS",
      proyecto: "Práctica Calificada 01: Desarrollo de un sitio web con framework",
      resumen_de_clase: "Tipografía, Layout, Flexbox, Application UI"
    },
    {
      semana: 4,
      tecnologias_usadas: ["Javascript", "DOM", "Canvas"],
      reflexion: "Desarrollo de una página web Front-End con Javascript",
      proyecto: "Trabajo 01: Manejar el DOM con Javascript y Canvas",
      resumen_de_clase: "Funciones, Clases, Arrays, Objetos Map y Set"
    },
    {
      semana: 5,
      tecnologias_usadas: ["Framework JS"],
      reflexion: "Estructura y operación de Framework – Client Side Rendering",
      proyecto: "Laboratorio 05A: Pasar datos con props y children y mostrar en un componente hijo",
      resumen_de_clase: "Gestión de dependencias, Desarrollo basado en componentes"
    },
    {
      semana: 6,
      tecnologias_usadas: ["Eventos", "Condicionales", "Bucles", "APIs"],
      reflexion: "Desarrollo con Eventos, Condicionales y Bucles con Framework JS",
      proyecto: "Laboratorio 06A: Eventos y Renderizado Condicional e iterativo con datos de una API",
      resumen_de_clase: "Promesas, Async await, Consumo de APIs con Axios"
    },
    {
      semana: 7,
      tecnologias_usadas: ["Hooks"],
      reflexion: "Uso de Hooks",
      proyecto: "Laboratorio 09: Uso de hooks",
      resumen_de_clase: "UseState, UseEffect, UseContext, UseRef, UseReducer, UseCallback, useMemo"
    },
    {
      semana: 9,
      tecnologias_usadas: ["Next JS", "Typescript"],
      reflexion: "Next JS – CSR / SSR, Typescript",
      proyecto: "Laboratorio 10: Caso práctico consumo de API",
      resumen_de_clase: "De javascript a typescript"
    },
    {
      semana: 10,
      tecnologias_usadas: ["Next JS", "Typescript", "Static Generate", "Incremental Static Generation"],
      reflexion: "Next JS – CSR / SSR, Static Generate – Static Regeneratión, Incremental Static Regeneration (ISR)",
      proyecto: "Laboratorio 10: Caso práctico consumo de API",
      resumen_de_clase: "Incremental Static Generation (ISG)"
    },
    {
      semana: 11,
      tecnologias_usadas: ["Server Side Props", "Next Auth"],
      reflexion: "Server Side Props, Next Auth",
      proyecto: "Laboratorio 11: Subsistema de autenticación con Next JS",
      resumen_de_clase: "getServerSideProps, Next Auth, Middlewares"
    },
    {
      semana: 13,
      tecnologias_usadas: ["Spring", "HTTP", "MVC", "API Rest"],
      reflexion: "Desarrollar API Rest con Spring",
      proyecto: "Laboratorio 13: Desarrollo de una API Rest y Despliegue.",
      resumen_de_clase: "Arquitectura API Rest"
    },
    {
      semana: 14,
      tecnologias_usadas: ["Eureka", "Microservicios", "Configuración avanzada en Eureka", "Configuración en la nube"],
      reflexion: "Registro de Microservicios en Eureka",
      proyecto: "Resumen del registro de microservicio",
      resumen_de_clase: "Consumo de un Microservicio"
    }
  ];

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <p className='text-sky-500 font-bold text-[20px]  tracking-tighter'>Proyectos realizados durante las 12 semanas</p>
      <div className={styles.proyectos}>
        {planDeEstudios.map(proyec => <Card key={proyec.semana} proyect={proyec} />)}
      </div>
    </div>
  )
}

export default Proyects