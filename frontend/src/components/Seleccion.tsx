import { useNavigate } from 'react-router-dom';

const opciones = ['Cocina', 'Mesero'];
const links = ['/cocina', '/mesas'];

export default function Seleccion() {
  const navigate = useNavigate();

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-[#f7f7f7]">
      <h1 className="m-6 text-4xl font-bold">¡Bienvenido a DISHFLOW!</h1>
      <p className="m-6 text-xl">Selecciona tu rol:</p>
      <div className="flex">
        {opciones.map((opcion: string, index) => {
          return (
            <div
              className="m-6 cursor-pointer border-2 border-solid border-gray-500 p-24 active:scale-95"
              onClick={() => navigate(links[index])}
              key={index}
            >
              {opcion}
            </div>
          );
        })}
      </div>
    </main>
  );
}
