export default function MesaComponente({ x, y, numero }: any) {
	return (
		<div
			className="w-1/3 rounded-full bg-gray-500 h-1/2 text-white leading-10 text-xl flex justify-center items-center"
			style={{ gridColumn: x, gridRow: y }}
		>
			{numero}
		</div>
	);
}
