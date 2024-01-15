"use client"
import Dashboard from '@/components/Dashboard'
import Transition from '@/components/Transition'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    console.log('Ejecutando')
    setTimeout(() => {
      setShowAnimation(false)
    }, 3000)
  }, [])
  return (
    <main className='h-[100vh]'>
      {showAnimation ? <Transition /> : <Dashboard />}
    </main>
  )
}
