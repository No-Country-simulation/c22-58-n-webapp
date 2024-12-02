export default function OrdenActual() {
  return (
    <main className="p-4 uppercase">
      <header className="flex h-20 w-full items-center bg-blue-600">
        <h1 className="ml-4 text-xl font-bold text-white">orden actual</h1>
      </header>
      <section className="h-[600px] border-2 border-solid border-gray-200"></section>
      <footer className="border-2 border-solid border-gray-200 p-4 font-bold">
        <div className="mb-4 flex justify-between">
          <span>total</span>
          <span>$300.00</span>
        </div>
        <button className="h-16 w-full bg-red-500 text-xl uppercase text-white">
          enviar a cocina
        </button>
      </footer>
    </main>
  );
}
