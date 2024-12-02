import PedidoCocinaPendiente from './PedidoCocinaPendiente';
import PedidoCocinaCompletado from './PedidoCocinaCompletado';
import usePedidos from '../../store/Pedidos';

//import { useState } from 'react';

function Cocina() {
  const posicionPedidos = usePedidos((state: any) => state.pedidos);
  console.log(posicionPedidos);

  /*   const [pedidoCocinaPendiente, setPedidoCocinaPendiente] = useState([
    {
      id: '#37594',
      mesa: 'MESA #8',
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
    },
    {
      id: '#37595',
      mesa: 'MESA #5',
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
    },
    {
      id: '#37596',
      mesa: 'MESA #1',
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
    },
    {
      id: '#37597',
      mesa: 'MESA #3',
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
    },
    {
      id: '#37598',
      mesa: 'MESA #6',
      items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'],
    },
  ]);

  const [ordenCompletada, setOrdenCompletada] = useState([]);

  const marcarOrdenCompletada = (orden) => {
    console.log('Orden completada:', orden);
    console.log('Pedidos pendientes actuales:', pedidoCocinaPendiente);

    const newPendingOrders = pedidoCocinaPendiente.filter(
      (o) => o.id !== orden.id
    );
    const newCompletedOrders = [...ordenCompletada, orden];

    console.log('Nuevos pedidos pendientes:', newPendingOrders);
    console.log('Nuevos pedidos completados:', newCompletedOrders);

    setPedidoCocinaPendiente(newPendingOrders);
    setOrdenCompletada(newCompletedOrders);
  }; */

  return (
    <>
      <header className="borde-solid box-border flex h-24 w-full items-center justify-between gap-2 border-b-2 border-slate-400 p-2">
        <div className="flex w-full justify-between p-5 2xl:p-56">
          <h1 className="text-start text-2xl font-bold uppercase">dishflow</h1>
          <h2 className="text-2xl font-bold uppercase text-[#27569D]">
            Cocina
          </h2>
        </div>
      </header>
      <main className="flex w-full font-bold uppercase md:w-screen">
        <section className="h-full w-[60%] border-2 border-solid border-gray-200 p-3 md:w-[75%] 2xl:h-screen">
          <h3 className="pb-3 text-center text-xl font-bold text-slate-950 xl:p-10">
            Pendientes
          </h3>
          <div className="flex w-full flex-wrap justify-center">
            {posicionPedidos
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
        <aside className="w-[40%] px-2 pt-4 text-center md:flex md:w-[25%] md:flex-col md:p-10 lg:w-[40%] 2xl:w-[25%]">
          <h3 className="mb-3 text-lg">Completadas</h3>
          <div className="flex flex-col 2xl:items-center 2xl:justify-center">
            {/*             {console.log('Pedidos completados:', ordenCompletada)}
            {ordenCompletada.map((orden) => ( */}
            {posicionPedidos
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
//const [completedOrders, setCompletedOrders] = useState([]);
