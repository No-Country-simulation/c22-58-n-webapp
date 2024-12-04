function PedidoCocinaPendiente({ orden, onComplete}) {
	return (
		<section className="bg-[#d7e7ff] w-60 min-h-56 m-3 p-3 relative md:w-80 lg:w-52 xl:h-64 2xl:w-60">
			<header className="flex mb-2">
				<span className="mr-auto">{orden.id}</span>
				<span>{orden.mesa}</span>
			</header>
			<main>
				<ul className="text-md lg:text-lg lg:pt-3">
					{orden.items.map((item, index) => (
						<li key={index} className="flex justify-between mb-2">{item}</li>
					))}
				</ul>

				<div className="w-[90%] flex justify-center items-center mt-3">
					<button 
						className="bg-sky-400 rounded-md p-2 text-slate-100 cursor-pointer text-lg md:p-3"
						onClick={() => {
							console.log('Boton clickeado');							
							onComplete();
						}}
						>
						Completado
					</button>
				</div>

				
			</main>
			<footer className="absolute bottom-2 right-2 bg-[#d7e7ff] text-slate-500">
				<span>12:36 PM</span>
			</footer>
		</section>
	);
}

export default PedidoCocinaPendiente;
