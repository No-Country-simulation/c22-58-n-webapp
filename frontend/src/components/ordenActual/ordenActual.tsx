import { useState } from 'react';
// Icons
import { RiDeleteBin6Line } from 'react-icons/ri';
import useOrdenActual from '../../../store/OrdenActual';
import useMesas from '../../../store/Mesas';
import usePedidos from '../../../store/Pedidos';
import { useNavigate } from 'react-router-dom';

const OrdenActual = () => {
  const mesa = useMesas((state: any) => state.mesaSeleccionada);
  const agregarPedido = usePedidos((state) => state.agregarPedido);
  const pedidos = usePedidos((state) => state.pedidos);
  const navigate = useNavigate();
  console.log(pedidos);
  const ordenes = useOrdenActual((state: any) => state);
  const productos = ordenes.orden;
  let total = 0;
  let elPedido = {
    id: Math.floor(Math.random() * 300000),
    mesa: mesa,
    items: arrayProductos(productos),
    completado: false,
  };
  console.log(elPedido);
  //Estado para los productos en la orden
  /*     const [productos, setProductos] = useState([
        { id: 1, nombre: "Producto 1", precio: 10 },
        { id: 2, nombre: "Producto 2", precio: 20 },
        { id: 3, nombre: "Producto 3", precio: 30 },
    ]); */

  function arrayProductos(productos) {
    const newArray = [];
    productos.forEach((element) => {
      newArray.push(element.nombre);
    });
    return newArray;
  }

  //Función para eliminar el producto
  const eliminarProducto = (id: string) => {
    //Filtrar los productos para eliminar el que se seleccionó
    //setProductos(productos.filter((producto) => producto.id !== id));
    ordenes.quitarALaOrden(id);
  };

  function elTotal(ele: any) {
    ele.forEach((ele: any) => {
      total += ele.precio;
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
            onClick={() => {
              agregarPedido(elPedido);
            }}
          >
            enviar a cocina
          </button>
        </footer>
      </aside>
      <button onClick={() => navigate('/cocina')}>ir a cocina</button>
    </main>
  );
};
export default OrdenActual;
