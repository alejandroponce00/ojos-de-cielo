
import Card from "./components/card";

export default function Home() {
  return (
    <div><h1 className=" text-center text-7xl text-gray-500 underline">Ojos de Cielo Arte</h1>
    <div className="flex content-center mx-auto m-2"><Card direccion="/imagenes/colibri.webp" width="500px" height="500"/>
    <Card direccion="/imagenes/libro.webp" width="500px" height="200" />
    <Card direccion="/imagenes/cuadros.webp" width="500px" height="200" />
    
    </div> <div className="flex"><Card direccion="/imagenes/mariposa.webp" width="500px" height="200" />
    <Card direccion="/imagenes/tasas.webp" width="500px" height="200" />
    <Card direccion="/imagenes/tasa-colibri.webp" width="500px" height="200" />
    </div>
    </div>
  );
}
