"use client"
import React from 'react'
import Carrusel from '../components/carrusel'
import { caveat } from '@/ui/fonts'
import { Fade } from 'react-awesome-reveal'

function Cuadros() {
  return (
    <div><h1 className={`${caveat.className} text-center text-7xl text-pink-600 underline my-7`}>  <Fade cascade damping={0.5}>Galeria</Fade></h1><Carrusel /></div>
  )
}

export default Cuadros