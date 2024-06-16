import React from 'react'
import Image from 'next/image'
function Contacto() {
  return (
    <div className='my-7 text-center px-auto'>
    <Image
      
      src="/imagenes/9-removebg-preview.png "
      alt="Picture of the author"
      width={500}
      height={500}
      className='opacity-70 items-center'
    />
    <a
href="https://www.instagram.com/ojosdecielo.arte"
className="rounded-md bg-red-500 px-3 py-2  font-medium text-white text-2xl"
aria-current="page"
>Instagram</a>
    </div>
  )
}

export default Contacto
