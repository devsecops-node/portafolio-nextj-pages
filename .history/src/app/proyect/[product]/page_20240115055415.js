// Post {params.product}
import { planDeEstudios } from "@/components/Proyects"
import { proyectos } from "../../../../data"
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

export default function Page({ params }) {
  const proyect = proyectos[params.product - 1]
  // console.log(params.product)
  // console.log(proyect)
  return (
    <div className="h-screen flex flex-col justify-center items-center w-[80%] mr-auto ml-auto relative ">
      <p className="font-bold text-[25px] text-sky-600 z-40">{proyect.proyecto}</p>
      <p className="font-bold">Reflexion: </p>
      <p className="text-[10px] z-40">{proyect.reflexion}</p>
      <img src={proyect.imagen} alt="imagen-semana" className='z-0 blur-sm opacity-50 bg-slate-400 flex rounded-md absolute animate-bounce ' />
      <p>Resumen</p>
      <p className="text-[10px] z-40">{proyect.resumen_de_clase}</p>
      <div className="flex flex-row gap-3 mt-[20px]">
        <FaGithub className="text-[40px] text-slate-600"/>
        <CiFacebook />
        <CiLinkedin />
      </div>

    </div>
  )
}