// Post {params.product}
import { planDeEstudios } from "@/components/Proyects"
import { proyectos } from "../../../../data"
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import Link from "next/link";
import styles from "@/styles/img.module.css"

export default function Page({ params }) {
  const proyect = proyectos[params.product - 1]
  const siguiente = Number(params.product) + 1
  // console.log(params.product)
  // console.log(proyect)
  return (
    <>
      {proyect ?
        (<div className="h-screen flex flex-col justify-center items-center gap-4 w-[80%] mr-auto ml-auto relative ">
          <p className="font-bold text-[25px] text-red-600 z-40">Semana {proyect.semana}</p>
          <p className="font-bold text-[25px] text-sky-600 z-40 text-center">{proyect.proyecto}</p>
          <p className="font-bold">Reflexion: </p>
          <p className="text-[10px] z-40 transition-all hover:text-[15px] hover:text-slate-700 duration-150">{proyect.reflexion}</p>
          <img src={proyect.imagen} alt="imagen-semana" className={styles.animar_imagen} />
          <p>Resumen</p>
          <p className="text-[10px] z-40 transition-all hover:text-[15px] hover:text-slate-700 duration-150">{proyect.resumen_de_clase}</p>
          <div className="flex flex-row gap-3 mt-[20px] items-center justify-center">
            <a href="https://github.com/devsecops-node" className="z-40">
              <FaGithub className="text-[40px] text-slate-600 z-40" />
            </a>
            <a href="" className="z-40">
              <CiFacebook className="text-[40px] text-sky-700 z-40" />
            </a>
            <a href="https://www.linkedin.com/in/alexander-huaman-4992b8205/" className="z-40">
              <CiLinkedin className="text-[40px] text-sky-800 z-40" />
            </a>
          </div>
          <Link href="/" className="text-sky-600 font-bold mt-[20px] animate-bounce">
            Home ↗️
          </Link>
          <Link href={`/proyect/${siguiente}`} className="text-blue-800 font-bold mt-[20px] ">
            Siguiente 🔴
          </Link>

        </div>) :
        (
          <div className="h-screen flex flex-col justify-center items-center mt-auto mb-auto">
            <p className="text-[#172c59] font-bold animate-bounce">Semana no Desarrollada</p>
            <img className="" src="https://static.vecteezy.com/system/resources/previews/005/238/451/non_2x/internet-network-warning-404-error-page-or-file-not-found-for-web-page-free-vector.jpg" alt="" />
          </div>
        )}
    </>
  )
}