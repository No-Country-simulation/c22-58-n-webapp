export default function MesaComponente({
  x,
  y,
  numero,
  estadoMesa,
  funcion,
}: {
  x: number;
  y: number;
  numero: number;
  estadoMesa: 'disponible' | 'pedido' | 'ocupada';
  funcion: (numero: number) => void;
}) {
  const coloresMesa = {
    'disponible': 'bg-gray-500',
    'pedido': 'bg-slate-400',
    'ocupada': 'bg-red-500',
  };  
  
  return (
    <div
      className={`flex h-1/2 w-1/3 items-center justify-center rounded-full ${coloresMesa[estadoMesa]} text-xl leading-10 text-white`}
      style={{ gridColumn: x, gridRow: y }}
      onClick={() => {
        funcion(numero);
      }}
    >
      {numero}
    </div>
  );
}
