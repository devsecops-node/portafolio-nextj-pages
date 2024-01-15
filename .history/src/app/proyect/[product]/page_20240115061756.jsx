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
    {proyect ? }
  )
}