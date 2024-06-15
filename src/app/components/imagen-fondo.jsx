import React from 'react'
import Image from 'next/image'
function Fondo() {
  return (
    <Image
      
      src="/imagenes/fondo.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
      className='opacity-40'
    />
  )
}

export default Fondo