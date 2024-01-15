// Post {params.product}
import { planDeEstudios } from "@/components/Proyects"
export default function Page({ params }) {
  const proyect = planDeEstudios[params.product-1]
  console.log(params.product)
  console.log(proyect)
  return (
    <div>

    </div>
  )
}