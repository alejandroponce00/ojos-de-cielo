"use client"
import Card from "./components/card";

import { caveat, roboto } from "@/ui/fonts";
import {lusitana } from "@/ui/fonts";
import { Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <div>
      <h1 className={`${caveat.className} text-center text-6xl text-pink-600 underline my-7  sm:text-7xl `}>
      <Fade cascade damping={0.1}> Ojos de Cielo Arte</Fade>
      </h1>
      <div>
        <p className={`${roboto.className} text-3xl`}>¡Bienvenidos a mi mundo de arte y creatividad!

Soy una artista especializada en transformar materiales comunes en obras únicas y llenas de vida. A través de técnicas de modelado en porcelana fría y la pintura sobre diversos soportes, doy vida a piezas exclusivas que reflejan mi pasión y dedicación por el arte.<br/>

<strong className="text-center"><u>¿Qué encontrarás aquí?</u></strong> <br/>
Diseños en porcelana fría: Cada pieza es cuidadosamente modelada a mano sobre vidrio y madera, creando decoraciones detalladas y únicas.
Pinturas acrílicas sobre madera: Mis cuadros son una explosión de color y emoción, pintados con esmero para embellecer cualquier espacio.
Accesorios personalizados: Desde aritos y llaveros hasta discos de vinilo pintados a mano, cada artículo es una obra de arte que puedes llevar contigo.
Cada creación es el resultado de un proceso meticuloso y apasionado, diseñado para aportar belleza y originalidad a tu vida diaria. Explora mi galería y descubre cómo el arte puede transformar lo cotidiano en extraordinario.

¡Gracias por visitar mi sitio web!</p>
      </div>
      <div className="flex content-center mx-auto m-2">
        <Card
          direccion="/imagenes/colibri.webp"
          width="500px"
          height="500"
          titulo="Cuadros"
          descripcion="Cuadros únicos pintados a mano con acrílicos sobre madera, llenos de color y emoción para tu espacio." />
        <Card
          direccion="/imagenes/tasa-colibri.webp"
          width="500px"
          height="200"
          titulo="Tasas"
          descripcion="Tazas únicas pintadas a mano con acrílico y decoradas con porcelana fría. ¡Añade arte a tu café!"
        />
        <Card
          direccion="/imagenes/60.jpg"
          width="500px"
          height="200"
          titulo="Cajas de Fibrofacil"
          descripcion="
Cajas de Fibrofacil pintadas con acrílico y porcelana fría: arte único para guardar tus cosas."
        />
      </div>{" "}
      
    </div>
  );
}
