export default function Mesas() {
	return (
		<main className="grid grid-cols-[20%,80%] grid-rows-[6rem,1fr,9rem] h-screen uppercase font-bold font-sans">
			<header className="col-span-full flex items-center border-solid border-b-2 border-b-gray-500">
				<h1 className="ml-28 text-3xl mr-auto">dishflow</h1>
				<span className="mr-28">nombre del mesero</span>
			</header>
			<aside className="col-span-1 row-span-2 py-2 border-r-gray-500 border-r-2 border-solid text-center relative">
				<h2 className="text-[#27569d] text-xl py-3 border-solid border-b-2 border-b-gray-500">
					areas
				</h2>
				<ul className="">
					<li className="py-3 hover:bg-[#d7e7ff] border-solid border-b-2 border-b-gray-500">
						area 1
					</li>
					<li className="py-3 hover:bg-[#d7e7ff] border-solid border-b-2 border-b-gray-500">
						area 2
					</li>
					<li className="py-3 hover:bg-[#d7e7ff] border-solid border-b-2 border-b-gray-500">
						area 3
					</li>
				</ul>
				<button className="uppercase absolute bottom-6 left-[50%] -translate-x-1/2 p-4">
					pedido para llevar
				</button>
			</aside>
			<section className="relative">
				<h3 className="absolute p-4 text-[#27569d] text-xl">mesas</h3>
			</section>
			<footer className="flex">
				<ul className="mr-auto flex flex-col justify-evenly">
					<li className="flex">
						<div className="border-solid border-b-2 border-gray-500 bg-gray-500 rounded-full w-6 mr-2"></div>
						mesa disponible
					</li>
					<li className="flex">
						<div className="border-solid border-b-2 border-gray-500 bg-red-500 rounded-full w-6 mr-2"></div>
						mesa en uso
					</li>
					<li className="flex">
						<div className="border-solid border-b-2 border-gray-500 bg-[#d7e7ff] rounded-full w-6 mr-2"></div>
						mesa seleccionada
					</li>
				</ul>
				<button className="p-3 m-3 min-w-40 bg-[#d7e7ff] border-solid border-2 border-gray-500">
					cuenta
				</button>
				<button className="p-3 m-3 min-w-40 mr-20 bg-[#d7e7ff] border-solid border-2 border-gray-500">
					levantar pedido
				</button>
			</footer>
		</main>
	);
}
