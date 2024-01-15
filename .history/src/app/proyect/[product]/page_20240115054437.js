// Post {params.product}
import { planDeEstudios } from "@/components/Proyects"
import { proyectos } from "../../../../data"
export default function Page({ params }) {
  const proyect = proyectos[params.product-1]
  // console.log(params.product)
  // console.log(proyect)
  return (
    <div className="h-screen flex flex-col justify-center items-center w-[80%] mr-auto ml-auto bg">
      <p className="font-bold text-[25px] text-sky-600">{proyect.proyecto}</p>
      <p className="font-bold">Reflexion: </p>
      <p className="text-[10px]">{proyect.reflexion}</p>
    </div>
  )
}