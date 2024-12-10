import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import usePedidos from '../../../store/Pedidos';

const Cuentas = () => {
  const navigate = useNavigate();
  const { pedidos, eliminarPedido } = usePedidos();
  // Obtenemos los parametros de la url
  let { numeroMesa, totalCuenta } = useParams<{
    numeroMesa: string;
    totalCuenta: string;
  }>();

  const items = recuperandoItems();
  console.log('items', items);

  // Estado para manejar los productos de la cuenta
  const [productos, setProductos] = useState(items);

  function recuperandoItems() {
    const nume = +numeroMesa;
    for (let i = 0; i < pedidos.length; i++) {
      if (pedidos[i].mesa === nume) {
        totalCuenta = pedidos[i].total;
        return pedidos[i].items;
      }
    }
  }

  function cuentaCobrada(numeroMesa) {
    eliminarPedido(numeroMesa);
    navigate('/mesas');
  }

  // Calcular subtotal

  const subtotal = totalCuenta;
  /*   const subtotal = productos.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  ); */

  // Calcular impuestos (por ejemplo, 16%)
  const impuestos = subtotal * 0.16;

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      {/* Card Header */}
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="p-3 text-xl font-bold text-slate-600 md:text-3xl">
            Cuenta de Mesa #{numeroMesa}
          </h2>
          <span className="text-lg">
            Fecha: {new Date().toLocaleDateString()}
          </span>
        </div>
        {/* Detalle de productos */}
        <div className="p-6">
          <h3 className="mb-4 text-xl font-semibold text-slate-600">
            Detalle de Consumo
          </h3>
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr className="text-slate-700">
                <th className="p-2">Producto</th>
                {/*               <th className="p-2">Cantidad</th>
                <th className="p-2">Precio Unitario</th>
                <th className="p-2 text-right">Total</th> */}
              </tr>
            </thead>
            <tbody className="text-center text-slate-800">
              {productos.map((producto, idx) => (
                <tr key={idx} className="border-b">
                  <td className="p-2">{producto}</td>
                  {/*              <td className="p-2">{producto.cantidad}</td>
                  <td className="p-2">${producto.precio.toFixed(2)}</td>
                  <td className="p-2 text-right">
                    ${(producto.precio * producto.cantidad).toFixed(2)}
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Resumen de la cuenta */}
        <div className="w-60 border-t bg-gray-100 p-4 md:p-6">
          <div className="mb-2 flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Impuestos (16%):</span>
            <span>${impuestos.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold">
            <span>Total:</span>
            <span>${(subtotal + impuestos).toFixed(2)}</span>
          </div>
        </div>

        {/* Acciones */}
        <div className="mt-3 flex justify-between gap-4 p-4">
          <button className="rounded bg-green-500 px-4 py-2 text-white transition hover:scale-110 hover:bg-green-600">
            Imprimir Cuenta
          </button>
          <button
            className="rounded bg-red-500 px-4 py-2 text-white transition hover:scale-110 hover:bg-red-600"
            onClick={() => cuentaCobrada(+numeroMesa)}
          >
            Cobrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cuentas;
