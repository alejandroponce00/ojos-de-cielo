
import React from 'react';
import Image from 'next/image'
function Card(props){
  return (
    <div className="backdrop-blur-sm max-w-sm  overflow-hidden shadow-lg mx-auto m-3 rounded ">
      <Image className="w-full rounded" src={props.direccion} alt="Sunset in the mountains" width={500} height={500}/>
      <div className="px-6 py-6">
        <div className="text-center font-bold text-xl mb-2 m-2 text-orange-800 md:text-3xl">{props.titulo}</div>
        <p className="text-center text-slate-800  text-sm font-semibold md:text-3xl">
          {props.descripcion}</p>
      </div>
      
      
    </div>
  );
}

export default Card;
