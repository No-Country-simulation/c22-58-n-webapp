function PedidoCocinaPendiente() {
  return (
    <section className="relative m-3 min-h-60 w-60 bg-[#d7e7ff] p-3">
      <header className="mb-2 flex">
        <span className="mr-auto">#37594</span>
        <span>MESA #8</span>
      </header>
      <main>
        <ul>
          <li>Hamburguesa 1</li>
          <li>hot dog</li>
          <li>quesadilla</li>
        </ul>
      </main>
      <footer className="absolute bottom-2 flex w-full justify-between">
        <span className="">12:36 PM</span>
        <button className="mr-5 text-sm opacity-70 hover:opacity-100">
          Completar
        </button>
      </footer>
    </section>
  );
}
export default PedidoCocinaPendiente;
