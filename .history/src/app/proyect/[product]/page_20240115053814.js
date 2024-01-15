// Post {params.product}
import { planDeEstudios } from "@/components/Proyects"
export default function Page({ params }) {
  const proyect = planDeEstudios[params.product-1]
  // console.log(params.product)
  // console.log(proyect)
  return (
    <div className="h-screen flex justify-center items-center">
      <p className="font-bold text-[15px] text-sky-600">{proyect.proyecto}</p>
    </div>
  )
}