import Card from "./components/card";

export default function Home() {
  return (
    <div>
      <h1 className=" text-center text-7xl text-gray-500 underline">
        Ojos de Cielo Arte
      </h1>
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
