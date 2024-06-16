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
  return (<div className="my-10 opacity-95"><Carousel>
  <CarouselContent>
   
    <CarouselItem><Card direccion="/imagenes/9.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/tasa-colibri.webp" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/colibri.webp" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/2.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/3.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/4.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/5.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/6.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/7.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/8.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/1.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/10.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/11.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/12.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/13.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/14.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/15.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/16.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/17.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/18.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/19.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/20.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/21.jpg" width="500px" height="200" /></CarouselItem>
    <CarouselItem><Card direccion="/imagenes/22.jpg" width="500px" height="200" /></CarouselItem>
  
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
</div>
    
  )
}

export default Carrusel
  