import MesaComponente from './MesaComponente';
import useMesas from '../../store/Mesas';
import { useState } from 'react';

export default function Mesas() {
	const posicionMesas = useMesas((state: any) => state.areas);
	console.log(posicionMesas);
	const [areaSeleccionada, setAreaSeleccionada] = useState(
		posicionMesas[0].nombreArea
	);

	function handleClickOtherArea(str: string) {
		setAreaSeleccionada(str);
	}

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
					{posicionMesas.map((area: any) => {
						return (
							<li
								className="py-3 hover:bg-[#d7e7ff] border-solid border-b-2 border-b-gray-500"
								onClick={() => handleClickOtherArea(area.nombreArea)}
								key={area.nombreArea}
							>
								{area.nombreArea}
							</li>
						);
					})}
				</ul>
				<button className="uppercase absolute bottom-6 left-[50%] -translate-x-1/2 p-4">
					pedido para llevar
				</button>
			</aside>
			<section className="relative grid-cols-8 grid-rows-8 border- gap-1 grid justify-items-center items-center">
				<h3 className="absolute p-4 text-[#27569d] text-xl -top-2 -left-2">
					mesas
				</h3>
				{posicionMesas.map((area: any) => {
					if (area.nombreArea === areaSeleccionada) {
						return area.mesas.map((mesitas: any) => (
							//console.log(mesitas);
							<MesaComponente
								key={mesitas.id}
								y={mesitas.y}
								x={mesitas.x}
								numero={mesitas.id}
								totalCuenta={mesitas.totalCuenta}
							/>
						));
					}
					return null;								
						
				})}
			</section>
			<footer className="flex border-solid border-t-2 border-t-gray-500">
				<ul className="mr-auto flex flex-col justify-evenly ml-2">
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
					Cuenta
				</button>
				<button className="p-3 m-3 min-w-40 mr-20 bg-[#d7e7ff] border-solid border-2 border-gray-500">
					levantar pedido
				</button>
			</footer>
		</main>
	);
}
