import PedidoCocinaPendiente from './PedidoCocinaPendiente';
import PedidoCocinaCompletado from './PedidoCocinaCompletado';
import usePedidos from '../../store/Pedidos';
import { useNavigate } from 'react-router-dom';

//import { useState } from 'react';

function Cocina() {
  const { pedidos } = usePedidos();
  const navigate = useNavigate();
  //const marcarCompletado = usePedidos((state: any) => state.marcarCompletado);

  return (
    <>
      <header className="borde-solid box-border flex h-24 w-full items-center justify-between gap-2 border-b-2 border-slate-400 p-2">
        <div className="flex w-full justify-between p-5 2xl:p-56">
          <h1
            className="cursor-pointer text-start text-2xl font-bold uppercase"
            onClick={() => navigate('/seleccion')}
          >
            dishflow
          </h1>
          <h2 className="text-2xl font-bold uppercase text-[#27569D]">
            Cocina
          </h2>
        </div>
      </header>
      <main className="flex h-screen w-full font-bold uppercase md:w-screen">
        <section className="h-full w-[60%] border-2 border-solid border-gray-200 p-3 md:w-[68%] md:pt-10 2xl:h-screen">
          <h3 className="pb-3 text-center text-xl font-bold text-slate-950">
            Pendientes
          </h3>
          <div className="flex w-full flex-wrap justify-center md:justify-between">
            {pedidos
              .filter((orden: any) => !orden.completado)
              .map((orden: any) => (
                <PedidoCocinaPendiente
                  key={orden.id}
                  orden={orden}
                  //onComplete={() => marcarOrdenCompletada(orden)}
                />
              ))}
          </div>
        </section>
        {/* Menu de la derecha */}
        <aside className="w-[40%] px-2 pt-4 text-center md:flex md:w-[30%] md:flex-col md:p-5 lg:w-[40%] 2xl:w-[35%]">
          <h3 className="mb-3 pt-5 text-lg">Completadas</h3>
          <div className="flex flex-col 2xl:items-center 2xl:justify-center">
            {pedidos
              .filter((orden: any) => orden.completado)
              .map((orden: any) => (
                <PedidoCocinaCompletado key={orden.id} orden={orden} />
              ))}
          </div>
        </aside>
      </main>
    </>
  );
}
export default Cocina;
