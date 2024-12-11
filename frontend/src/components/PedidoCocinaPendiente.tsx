import usePedidos from '../../store/Pedidos';

export default function PedidoCocinaPendiente({ orden }) {
  const { marcarCompletado } = usePedidos();

  return (
    <section className="relative m-3 max-h-fit min-h-56 w-60 bg-[#d7e7ff] p-3 md:w-64 lg:w-72 2xl:w-60">
      <header className="mb-2 flex">
        <span className="mr-auto">{orden.id}</span>
        <span>Mesa #{orden.mesa}</span>
      </header>
      <main>
        <ul className="text-md pb-5 lg:pt-3 lg:text-lg">
          {orden.items.map((item, index) => (
            <li key={index} className="mb-2 flex justify-between">
              {item}
            </li>
          ))}
        </ul>
      </main>
      <footer className="absolute bottom-2 right-2 bg-[#d7e7ff] text-slate-500">
        <div className="mt-3 flex w-[90%] items-center justify-center">
          <button
            className="cursor-pointer rounded-md bg-sky-400 p-2 text-lg text-slate-100 md:p-1"
            onClick={() => {
              marcarCompletado(orden.id);
            }}
          >
            Completado
          </button>
        </div>
      </footer>
    </section>
  );
}
