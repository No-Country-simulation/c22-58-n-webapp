import ManagerEmpleados from './ManagerEmpleados';
import ManagerAreas from './ManagerAreas';
import ManagerMesas from './ManagerMesas';
import ManagerPlatos from './ManagerPlatos';

import { useState } from 'react';

export default function Manager() {
	const [seccion, setSeccion] = useState('mesas');

	function handleChangeSelection(str: string) {
		setSeccion(str);
	}

	return (
		<>
			<header className="flex border-b-gray-500 h-24 border-solid border-2 w-screen items-center font-sans">
				<h1 className="uppercase ml-28 font-bold text-3xl absolute">
					dishflow
				</h1>
				<h2 className="uppercase font-bold text-2xl text-[#27569d] mx-auto">
					manager
				</h2>
			</header>
			<main className="flex w-screen h-[calc(100vh-6rem)] font-bold uppercase">
				<aside className="w-[20%] py-2 text-center border-r-gray-500 border-solid border-2 ">
					<h3 className="text-[#27569d] py-2 border-b-gray-500 border-b-2 border-solid text-xl">
						configuracion
					</h3>
					<ul>
						<li
							className="py-2 border-b-gray-500 border-b-2 border-solid w-full hover:bg-[#d7e7ff]"
							onClick={() => handleChangeSelection('mesas')}
						>
							mesas
						</li>
						<li
							className="py-2 border-b-gray-500 border-b-2 border-solid w-full hover:bg-[#d7e7ff]"
							onClick={() => handleChangeSelection('empleados')}
						>
							empleados
						</li>
						<li
							className="py-2 border-b-gray-500 border-b-2 border-solid w-full hover:bg-[#d7e7ff]"
							onClick={() => handleChangeSelection('menu')}
						>
							menu
						</li>
						<li
							className="py-2 border-b-gray-500 border-b-2 border-solid w-full hover:bg-[#d7e7ff]"
							onClick={() => handleChangeSelection('areas')}
						>
							areas
						</li>
					</ul>
				</aside>
				{seccion === 'mesas' && <ManagerMesas />}
				{seccion === 'empleados' && <ManagerEmpleados />}
				{seccion === 'menu' && <ManagerPlatos />}
				{seccion === 'areas' && <ManagerAreas />}
			</main>
		</>
	);
}
