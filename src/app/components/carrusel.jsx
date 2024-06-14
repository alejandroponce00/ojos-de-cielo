import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import React from 'react'
import Card from "./card";

function Carrusel (props) {
  return (<div className="mx-80 my-10 bg-slate-600"><Carousel>
  <CarouselContent>
    <CarouselItem>{<Card direccion="/imagenes/tasas.webp" width="500px" height="200" />}</CarouselItem>
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
  