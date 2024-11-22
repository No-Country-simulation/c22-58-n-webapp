export default function ManagerEmpleados() {
	return (
		<section className="w-[calc(100vw-20%)] flex p-6 relative">
			<aside className="mr-8 bg-[#d7e7ff] p-3">
				<h4>lista de todos los empleados</h4>
				<ul></ul>
			</aside>
			<article className="flex flex-col">
				<h4 className="mb-3">agregar/modificar empleado</h4>
				<label htmlFor="nombre" className="mb-2">
					Nombre:
					<input
						type="text"
						id="nombre"
						className="border-b-2 border-solid border-b-black"
					/>
				</label>
				<label htmlFor="apellidos" className="mb-2 mr-4">
					apellidos:
					<input
						type="text"
						id="apellidos"
						className="border-b-2 border-solid border-b-black"
					/>
				</label>
				<label htmlFor="email" className="mb-2">
					email:
					<input
						type="text"
						id="email"
						className="border-b-2 border-solid border-b-black"
					/>
				</label>
				<label htmlFor="rol" className="mb-2">
					rol:
					<input
						type="text"
						id="rol"
						className="border-b-2 border-solid border-b-black"
					/>
				</label>
				<button className="absolute bottom-8 uppercase border-solid border-2 border-gray-500 p-3">
					salvar cambios
				</button>
			</article>
		</section>
	);
}
