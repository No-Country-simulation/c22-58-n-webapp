import useMesas from "../../store/Mesas";

function BarraNavegacionMenu() {
	const mesaActual = useMesas((state: any) => state.mesaSeleccionada);
	console.log('La mesa actual seleccionada:', mesaActual);
	
	return (
		<header className="flex justify-between border-b-gray-500 h-24 border-solid border-2 items-center font-sans">
			<h1 className="uppercase md:mr-auto md:ml-28 font-bold text-xl md:text-2xl">dishflow</h1>
			<span className="uppercase md:mx-28 font-bold text-sm">Mesa: {mesaActual}</span>
			<span className="uppercase md:mx-28 font-bold text-sm">
				nombre del mesero
			</span>
		</header>
	);
}
export default BarraNavegacionMenu;
