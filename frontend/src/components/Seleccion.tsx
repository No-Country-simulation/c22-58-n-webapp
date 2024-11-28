import { useNavigate } from 'react-router-dom';

const opciones = ['Cocina', 'Mesero', 'Manager'];
const links = ['/cocina', '/mesas', '/manager'];

export default function Seleccion() {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-[#f7f7f7]">
      <h1 className="m-6 text-4xl font-bold">¡Bienvenido a DISHFLOW!</h1>
      <p className="m-6 text-xl">Selecciona tu rol:</p>
      <ul className="flex">
        {opciones.map((opcion: string, idx) => {
          return (
            <li
              className="m-6 cursor-pointer border-2 border-solid border-gray-500 p-24 active:scale-95"
              onClick={() => navigate(links[idx])}
            >
              {opcion}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
