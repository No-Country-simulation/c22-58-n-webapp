import PedidoCocinaPendiente from './PedidoCocinaPendiente';
import PedidoCocinaCompletado from './PedidoCocinaCompletado';

function Cocina() {
	return (
		<>
			<header className="flex border-b-gray-500 h-24 border-solid border-2 w-screen items-center font-sans ">
				<h1 className="uppercase ml-28 font-bold text-3xl absolute">
					dishflow
				</h1>
				<h2 className="uppercase font-bold text-2xl text-[#27569D] mx-auto">
					Cocina
				</h2>
			</header>
			<main className="flex w-screen h-[calc(100vh-6rem)] font-bold uppercase">
				<section className="border-2 border-solid border-gray-200 w-[80%] h-full p-6 ">
					<h3>Pendientes</h3>
					<div className="flex flex-wrap justify-center">
						<PedidoCocinaPendiente />
						<PedidoCocinaPendiente />
						<PedidoCocinaPendiente />
						<PedidoCocinaPendiente />
						<PedidoCocinaPendiente />
						<PedidoCocinaPendiente />
					</div>
				</section>
				<aside className="w-[20%] p-6 text-center ">
					<h3 className="mb-3">Completadas</h3>
					<div className="flex flex-col ">
						<PedidoCocinaCompletado />
						<PedidoCocinaCompletado />
						<PedidoCocinaCompletado />
						<PedidoCocinaCompletado />
					</div>
				</aside>
			</main>
		</>
	);
}
export default Cocina;
