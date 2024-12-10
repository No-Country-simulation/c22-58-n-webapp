import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const navigate = useNavigate();
  return (
    <main className="grid-cols[10%,65%,25%] grid-rows[10%,90%] grid h-screen w-screen">
      <header className="borde-solid box-border flex h-24 w-full items-center justify-between gap-2 border-b-2 border-slate-400 p-2">
        <div className="flex w-full justify-between p-5 2xl:p-56">
          <h1
            className="text-start text-2xl font-bold uppercase"
            onClick={() => navigate('/seleccion')}
          >
            dishflow
          </h1>
          <h2 className="text-2xl font-bold uppercase text-[#27569D]">
            Cocina
          </h2>
        </div>
      </header>
    </main>
  );
}
