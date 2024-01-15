// Post {params.product}
import { planDeEstudios } from "@/components/Proyects"
export default function Page({ params }) {
  const proyect = planDeEstudios[params.produc-1]
  console.log(proyect)
  return (
    <div>

    </div>
  )
}