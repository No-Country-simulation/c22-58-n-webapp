function PedidoCocinaPendiente() {
	return (
		<section className="bg-[#d7e7ff] w-60 min-h-60 m-3 p-3 relative">
			<header className="flex mb-2">
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
			<footer className="absolute bottom-2 right-2">
				<span>12:36 PM</span>
			</footer>
		</section>
	);
}
export default PedidoCocinaPendiente;
