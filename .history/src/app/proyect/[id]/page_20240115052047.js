"use client"
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
  console.log(router.query)
  return <p>Post</p>
}