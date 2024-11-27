import React from 'react';

// Definir las props del componente (si es que las tiene)
interface PedidoParteCentralProps {
  nombre: string;
  precio: number;  
}

// Crear el componente funcional
const PedidoParteCentral: React.FC<PedidoParteCentralProps> = ({ nombre, precio }) => {
  return (
    <div className=" bg-blue-200 p-5 text-gray-50 md:text-xl m-5	text-xs">
      <h1 >{nombre}</h1>
      <h1 >${precio} <a>🗑️</a></h1>
      
    </div>
  );
}

export default PedidoParteCentral;