function PedidoCocinaCompletado({ orden }) {
	return (
		<section className="flex flex-col relative h-40 bg-[#d7e7ff] mt-3 p-2 md:w-full xl:h-52 2xl:w-72">
			<header className="flex mb-2">
				<span className="mr-auto ml-2 text-sm lg:text-lg">{orden.id}</span>{' '}
				<span className="mr-2 text-sm lg:text-lg">{orden.mesa}</span>
			</header>
			
			<main>
				<ul className="text-sm lg:text-lg lg:pt-3">
				{orden.items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
				</ul>
      		</main>
			<footer className="absolute bottom-2 right-2 bg-[#d7e7ff] text-slate-500">
				<span>12:36 PM</span>
			</footer>
		</section>
	);
}
export default PedidoCocinaCompletado;
