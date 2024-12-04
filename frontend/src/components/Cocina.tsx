import PedidoCocinaPendiente from './PedidoCocinaPendiente';
import PedidoCocinaCompletado from './PedidoCocinaCompletado';

import { useState } from 'react';

function Cocina() {
	const [pedidoCocinaPendiente, setPedidoCocinaPendiente] = useState([
		{ id: '#37594', mesa: 'MESA #8', items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'] },
		{ id: '#37595', mesa: 'MESA #5', items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'] },
		{ id: '#37596', mesa: 'MESA #1', items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'] },
		{ id: '#37597', mesa: 'MESA #3', items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'] },
		{ id: '#37598', mesa: 'MESA #6', items: ['Hamburguesa 1', 'hot dog', 'Quesadilla'] }
	]);

	const [ordenCompletada, setOrdenCompletada] = useState([]);

	const marcarOrdenCompletada = (orden) => {
		// console.log('Orden completada:', orden);
		// console.log('Pedidos pendientes actuales:', pedidoCocinaPendiente);
		
		const newPendingOrders = pedidoCocinaPendiente.filter(o => o.id !== orden.id);
  		const newCompletedOrders = [...ordenCompletada, orden];
  
		// console.log('Nuevos pedidos pendientes:', newPendingOrders);
		// console.log('Nuevos pedidos completados:', newCompletedOrders);
		
		setPedidoCocinaPendiente(newPendingOrders);
		setOrdenCompletada(newCompletedOrders);
	};

	return (
		<>
			<header className="w-full h-24 flex items-center justify-between p-2 borde-solid border-2 border-slate-400 gap-2 box-border">
				<div className='w-full flex justify-between p-5 2xl:p-56'>
					<h1 className="uppercase font-bold text-2xl text-start">
						dishflow
					</h1>
					<h2 className="uppercase font-bold text-2xl text-[#27569D]">
						Cocina
					</h2>
				</div>				
				
			</header>
			<main className="w-full flex md:w-screen font-bold uppercase">
				<section className="w-[60%] border-2 border-solid border-gray-200 h-full p-3 md:w-[75%] md:pt-10 2xl:h-screen">
					<h3 className='text-xl text-center font-bold text-slate-950 pb-3 xl:p-10'>Pendientes</h3>
					<div className="w-full flex flex-wrap justify-center">
						{pedidoCocinaPendiente.map((orden) => (
							<PedidoCocinaPendiente
								key={orden.id}
								orden={orden}
								onComplete={() => marcarOrdenCompletada(orden)}
							/>
						))}						
					</div>
				</section>
				{/* Menu de la derecha */}
				<aside className="w-[45%] px-2 pt-4 text-center md:w-[50%] md:flex md:flex-col md:p-10 lg:w-[40%] 2xl:w-[35%]">
					<h3 className="mb-3 text-lg">Completadas</h3>
					<div className="flex flex-col 2xl:justify-center 2xl:items-center">
						{ordenCompletada.map((orden) => (
							<PedidoCocinaCompletado
								key={orden.id}
								orden={orden}
							/>
						))}						
					</div>
				</aside>
			</main>
		</>
	);
}
export default Cocina;
//const [completedOrders, setCompletedOrders] = useState([]);