function PedidoCocinaCompletado({ orden }) {
  return (
    <section className="xl:h-42 relative mt-3 flex h-36 flex-col bg-[#d7e7ff] p-2 md:w-full 2xl:w-72">
      <header className="mb-2 flex">
        <span className="ml-2 mr-auto text-sm lg:text-lg">{orden.id}</span>{' '}
        <span className="mr-2 text-sm lg:text-lg">{orden.mesa}</span>
      </header>

      <main>
        <ul className="lg:text-md text-sm lg:pt-3">
          {orden.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </main>
    </section>
  );
}
export default PedidoCocinaCompletado;
