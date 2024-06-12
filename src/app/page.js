import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <div><h1 className="text-center text-5xl font-bold">Titulo de ejemplo</h1>
    <div className="flex content-center mx-auto"><Card direccion="/imagenes/colibri.webp" width="500px" height="500"/>
    <Card direccion="/imagenes/libro.webp" width="500px" height="200" />
    <Card direccion="/imagenes/cuadros.webp" width="500px" height="200" />
    
    </div> <div className="flex"><Card direccion="/imagenes/mariposa.webp" width="500px" height="200" />
    <Card direccion="/imagenes/tasas.webp" width="500px" height="200" />
    <Card direccion="/imagenes/tasa-colibri.webp" width="500px" height="200" />
    </div>
    </div>
  );
}
