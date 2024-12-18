import MesaComponente from './MesaComponente';
import useMesas from '../../store/Mesas';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import usePedidos from '../../store/Pedidos';

export default function Mesas() {
  const { pedidos } = usePedidos();
  console.log(pedidos);
  const navigate = useNavigate();
  const posicionMesas = useMesas((state: any) => state.areas);
  useEffect(() => {
    mesasOcupadas(pedidos);
  }, []);

  const [areaSeleccionada, setAreaSeleccionada] = useState(
    posicionMesas[0].nombreArea
  );
  const [mesaSeleccionada, setMesaSeleccionada] = useState();

  const [estadoMesa, setEstadoMesa] = useState<{
    [key: number]: 'disponible' | 'pedido' | 'ocupada';
  }>({});

  function handleClickOtherArea(str: string) {
    setAreaSeleccionada(str);
  }
  //console.log(mesaSeleccionada);

  function handleClickEnMesa(numero: number) {
    setMesaSeleccionada((prevState) => numero);
    useMesas.getState().setMesa(numero);

    setEstadoMesa((prevEstados) => {
      const estadoActual = prevEstados[numero] || 'disponible';

      const nuevoEstado =
        estadoActual === 'disponible'
          ? 'pedido'
          : estadoActual === 'pedido'
            ? 'disponible'
            : 'ocupada';

      return {
        ...prevEstados,
        [numero]: nuevoEstado,
      };
    });
  }
  console.log(mesaSeleccionada, 'mesa seleccionada');

  function mesasOcupadas(pedidos) {
    for (let i = 0; i < pedidos.length; i++) {
      let numero = pedidos[i].mesa;
      console.log(numero);
      setEstadoMesa((prevEstados) => {
        return {
          ...prevEstados,
          [numero]: 'ocupada',
        };
      });
    }
  }

  const hayMesaParaPedido = Object.entries(estadoMesa).find(
    ([_, estado]) => estado === 'pedido'
  );

  const hayMesasOcupadas = Object.entries(estadoMesa).find(
    ([_, estado]) => estado === 'ocupada'
  );

  return (
    <main className="grid h-screen grid-cols-[20%,80%] grid-rows-[6rem,1fr,9rem] font-sans font-bold uppercase">
      <header className="col-span-full flex items-center border-b-2 border-solid border-b-gray-500">
        <h1
          className="ml-28 mr-auto cursor-pointer text-3xl"
          onClick={() => navigate('/seleccion')}
        >
          dishflow
        </h1>
        {/*         <span className="mr-28">nombre del mesero</span> */}
      </header>
      <aside className="relative col-span-1 row-span-2 border-r-2 border-solid border-r-gray-500 py-2 text-center">
        <h2 className="border-b-2 border-solid border-b-gray-500 py-3 text-xl text-[#27569d]">
          areas
        </h2>
        <ul className="">
          {posicionMesas.map((area: any) => {
            return (
              <li
                className="border-b-2 border-solid border-b-gray-500 py-3 hover:bg-[#d7e7ff]"
                onClick={() => handleClickOtherArea(area.nombreArea)}
                key={area.nombreArea}
              >
                {area.nombreArea}
              </li>
            );
          })}
        </ul>
        {/*      <button className="absolute bottom-6 left-[50%] -translate-x-1/2 p-4 uppercase">
          pedido para llevar
        </button> */}
      </aside>
      <section className="border- relative grid grid-cols-8 grid-rows-8 items-center justify-items-center gap-1">
        <h3 className="absolute -left-2 -top-2 p-4 text-xl text-[#27569d]">
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
                estadoMesa={estadoMesa[mesitas.id] || 'disponible'}
                funcion={handleClickEnMesa}
              />
            ));
          }
          return null;
        })}
      </section>
      <footer className="flex border-t-2 border-solid border-t-gray-500">
        <ul className="ml-2 mr-auto flex flex-col justify-evenly">
          <li className="flex">
            <div className="mr-2 w-6 rounded-full border-b-2 border-solid border-gray-500 bg-gray-500"></div>
            mesa disponible
          </li>
          <li className="flex">
            <div className="mr-2 w-6 rounded-full border-b-2 border-solid border-gray-500 bg-red-500"></div>
            mesa en uso
          </li>
          <li className="flex">
            <div className="mr-2 w-6 rounded-full border-b-2 border-solid border-gray-500 bg-[#d7e7ff]"></div>
            mesa seleccionada
          </li>
        </ul>

        <Link
          className="m-3 flex min-w-40 items-center justify-center border-2 border-solid border-gray-500 bg-[#d7e7ff] p-3"
          to={hayMesasOcupadas ? `/cuentas/${mesaSeleccionada}/500` : '#'}
          style={{
            pointerEvents: hayMesasOcupadas ? 'auto' : 'none',
            opacity: hayMesasOcupadas ? 1 : 0.5,
            color: 'black',
          }}
        >
          Cuenta
        </Link>

        <button
          className="m-3 mr-20 flex min-w-40 items-center justify-center border-2 border-solid border-gray-500 bg-[#d7e7ff] p-3 uppercase"
          style={{
            pointerEvents: hayMesaParaPedido ? 'auto' : 'none',
            opacity: hayMesaParaPedido ? 1 : 0.5,
            color: estadoMesa !== 'ocupada' ? 'black' : 'red',
          }}
          onClick={() => navigate('/categorias')}
        >
          levantar pedido
        </button>
      </footer>
    </main>
  );
}
