import Card from "./components/card";

import { roboto } from "@/ui/fonts";

export default function Home() {
  return (
    <div>
      <h1 className=" text-center text-7xl text-gray-500 underline">
        Ojos de Cielo Arte
      </h1>
      <div>
        <p className={`${roboto.className}`}>¡Bienvenidos a mi mundo de arte y creatividad!

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
          descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, blanditiis? Repudiandae odio doloribus neque optio quia pariatur, suscipit perferendis esse."
        />
        <Card
          direccion="/imagenes/tasa-colibri.webp"
          width="500px"
          height="200"
          titulo="Tapas de Libros"
          descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, blanditiis? Repudiandae odio doloribus neque optio quia pariatur, suscipit perferendis esse."
      
        />
        <Card
          direccion="/imagenes/libro.webp"
          width="500px"
          height="200"
          titulo="Tapas de Libros"
          descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, blanditiis? Repudiandae odio doloribus neque optio quia pariatur, suscipit perferendis esse."
      
        />
      </div>{" "}
      <div className="flex">
        <Card
          direccion="/imagenes/mariposa.webp"
          width="500px"
          height="200"
          titulo="Tutores"
          descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, blanditiis? Repudiandae odio doloribus neque optio quia pariatur, suscipit perferendis esse."
      
        />
        <Card
          direccion="/imagenes/tasas.webp"
          width="500px"
          height="200"
          titulo="Tasas"
          descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, blanditiis? Repudiandae odio doloribus neque optio quia pariatur, suscipit perferendis esse."
      
        />

        <Card direccion="/imagenes/cuadros.webp" width="500px" height="200" titulo="cuadros"descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, blanditiis? Repudiandae odio doloribus neque optio quia pariatur, suscipit perferendis esse."
      />
      </div>
    </div>
  );
}
