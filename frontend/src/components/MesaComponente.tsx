export default function MesaComponente({
  x,
  y,
  numero,
  mesaSeleccionada,
  funcion,
}: any) {
  let color =
    'flex h-1/2 w-1/3 items-center justify-center rounded-full bg-gray-500 text-xl leading-10 text-white';
  if (mesaSeleccionada === numero) {
    color =
      'flex h-1/2 w-1/3 items-center justify-center rounded-full bg-[#d7e7ff] text-xl leading-10 text-white';
  }
  return (
    <div
      className={color}
      style={{ gridColumn: x, gridRow: y }}
      onClick={() => {
        funcion(numero);
      }}
    >
      {numero}
    </div>
  );
}
