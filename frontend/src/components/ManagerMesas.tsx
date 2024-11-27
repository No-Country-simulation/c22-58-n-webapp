export default function ManagerMesas() {
	return (
		<section className="flex flex-col uppercase p-8 relative w-[calc(100vw-20%)]">
			<div className="bg-[#d7e7ff] p-3 w-60 text-sm">
				<div className="flex justify-between">
					<span>mesa 1</span> <button className="font-normal">cerrar</button>
				</div>
				<div className="flex justify-between">
					<span>posicion horizontal</span>
					<span className="font-normal">4</span>
				</div>
				<div className="flex justify-between">
					<span>posicion vertical</span>
					<span className="font-normal">6</span>
				</div>
				<div className="flex justify-between">
					<span>area</span>
					<span className="font-normal">principal</span>
				</div>
			</div>
			<button className="uppercase absolute bottom-8 right-16 border-2 border-solid border-gray-500 p-4">
				agregar mesa
			</button>
		</section>
	);
}
