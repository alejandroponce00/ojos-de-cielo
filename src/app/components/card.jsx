
import React from 'react';
import Image from 'next/image'
function Card(props){
  return (
    <div className="max-w-sm  overflow-hidden shadow-lg mx-auto m-3 p-2 rounded">
      <Image className="w-full rounded" src={props.direccion} alt="Sunset in the mountains" width={500} height={500}/>
      <div className="px-6 py-6">
        <div className="font-bold text-xl mb-2 m-2">{props.titulo}</div>
        <p className="text-slate-800 text-base">
          {props.descripcion}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  );
}

export default Card;
