//import { useState } from "react";
import { useNavigate } from 'react-router-dom';

// Icons
import { RiDeleteBin6Line } from 'react-icons/ri';

//Components
import useOrdenActual from '../../../store/OrdenActual';
import useMesas from '../../../store/Mesas';
import usePedidos from '../../../store/Pedidos';

const OrdenActual = () => {
  const mesa = useMesas((state: any) => state.mesaSeleccionada);
  const agregarPedido = usePedidos((state) => state.agregarPedido);
  const ordenes = useOrdenActual((state: any) => state);
  const productos = ordenes.orden;
  const navigate = useNavigate();

  let total = 0;

  const handleEnviarCocina = () => {
    //Creamos el objetos del pedido
    let elPedido = {
      id: `#${Math.floor(Math.random() * 90000) + 10000}`,
      mesa: mesa,
      items: productos.map((producto) => producto.nombre),
      total: total,
      completado: false,
    };
    console.log(elPedido);

    agregarPedido(elPedido); //se agrega el pedido al store
    ordenes.limpiarOrden();
    navigate('/cocina');
  };

  const pedidos = usePedidos((state) => state.pedidos);
  console.log(pedidos);

  //funcion para obtener los productos en el formato adecuado
  // function arrayProductos(productos) {
  //     const newArray = [];
  //     productos.forEach((producto) => {
  //         newArray.push(producto.nombre);
  //     });
  //     return newArray;
  // }

  //Función para eliminar el producto
  const eliminarProducto = (id: string) => {
    ordenes.quitarALaOrden(id);
  };

  //Calcular el total del pedido
  function elTotal(element: any) {
    element.forEach((element: any) => {
      total += element.precio;
    });
  }
  elTotal(productos);

  return (
    <main className="flex w-full items-center justify-center">
      <aside className="right-0 top-0 w-full px-2 pt-4 text-center xl:w-[70%]">
        <header className="mb-7 mt-[4.5rem] flex h-[4rem] items-center justify-center bg-blue-600 xl:h-[5rem]">
          <h3 className="pb-5 text-center text-xl font-bold text-white lg:text-2xl xl:pb-3 2xl:text-4xl">
            Orden Actual
          </h3>
        </header>
        <div className="flex flex-col pb-8">
          {productos.length === 0 ? (
            <p className="pb-10 text-center text-lg xl:text-4xl">
              No hay productos en la orden.
            </p>
          ) : (
            productos.map((producto: any, idx) => (
              <div
                key={idx}
                className="mb-4 flex h-20 items-center justify-between gap-3 border-2 border-solid border-slate-400 bg-sky-50 p-3"
              >
                <div className="">
                  <h4 className="text-center text-sm font-bold lg:text-xl">
                    {producto.nombre}
                  </h4>
                  <p className="text-center text-sm font-semibold lg:text-lg">
                    ${producto.precio}
                  </p>
                </div>
                <button
                  onClick={() => eliminarProducto(producto.nombre)}
                  className="flex items-center justify-center rounded bg-red-500 p-2 text-white lg:h-10 lg:w-16 lg:text-2xl"
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            ))
          )}
        </div>
        <footer className="border-2 border-solid border-gray-200 p-4 font-bold">
          <div className="mb-4 flex justify-between">
            <span>total</span>
            <span>${total}.00</span>
          </div>
          <button
            className="h-10 w-full rounded-md bg-red-500 text-xs uppercase text-white lg:text-xl"
            onClick={handleEnviarCocina}
          >
            enviar a cocina
          </button>
        </footer>
      </aside>
      {/* <button onClick={() => navigate('/cocina')}>Ir a cocina</button> */}
    </main>
  );
};
export default OrdenActual;
