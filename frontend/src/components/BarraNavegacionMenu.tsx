import useMesas from '../../store/Mesas';

function BarraNavegacionMenu() {
  const mesaActual = useMesas((state: any) => state.mesaSeleccionada);
  return (
    <header className="flex h-24 items-center justify-between border-2 border-solid border-b-gray-500 font-sans">
      <h1 className="text-xl font-bold uppercase md:ml-28 md:mr-auto md:text-2xl">
        dishflow
      </h1>
      <span className="text-sm font-bold uppercase md:mx-28">
        Mesa: {mesaActual}
      </span>
      {/*     <span className="text-sm font-bold uppercase md:mx-28">
        nombre del mesero
      </span> */}
    </header>
  );
}
export default BarraNavegacionMenu;
