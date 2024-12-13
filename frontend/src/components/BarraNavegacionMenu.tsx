import { useNavigate } from 'react-router-dom';
import useMesas from '../../store/Mesas';

function BarraNavegacionMenu() {
  const navigate = useNavigate();
  const mesaActual = useMesas((state: any) => state.mesaSeleccionada);

  return (
    <header className="flex h-24 items-center justify-between border-2 border-solid border-b-gray-500 font-sans">
      <h1
        className="cursor-pointer text-xl font-bold uppercase md:ml-28 md:mr-auto md:text-2xl"
        onClick={() => navigate('/seleccion')}
      >
        dishflow
      </h1>
      <span className="text-sm font-bold uppercase md:mx-28">
        Mesa: {mesaActual}
      </span>
      {/*       <span className="text-sm font-bold uppercase md:mx-28">
        nombre del mesero
      </span> */}
    </header>
  );
}
export default BarraNavegacionMenu;
