import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import React from 'react'
import Card from "./card";
import Image from "next/image";

function Carrusel (props) {
  return (<div className="my-10 opacity-80"><Carousel>
  <CarouselContent>
    <CarouselItem><Image 
    src='/imagenes/colibri.webp'
    alt="foto"
    width={1000}
    height={760}
    /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/colibri.webp" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/tasa-colibri.webp" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/libro.webp" width="500px" height="200" /></CarouselItem>
  
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</div>
    
  )
}

export default Carrusel
  