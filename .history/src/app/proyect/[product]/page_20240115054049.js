// Post {params.product}
import { planDeEstudios } from "@/components/Proyects"
import { proyectos } from "../../../../data"
export default function Page({ params }) {
  const proyect = proyectos[params.product-1]
  // console.log(params.product)
  // console.log(proyect)
  return (
    <div className="h-screen flex justify-center items-center">
      <p className="font-bold text-[25px] text-sky-600">{proyect.proyecto}</p>
    </div>
  )
}