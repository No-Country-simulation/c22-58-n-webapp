import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Cuentas = () => {
  // Obtenemos los parametros de la url
  const { numeroMesa, totalCuenta } = useParams<{
    numeroMesa: string;
    totalCuenta: string;
  }>();

  // Estado para manejar los productos de la cuenta
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Hamburguesa', precio: 10.99, cantidad: 2 },
    { id: 2, nombre: 'Refresco', precio: 2.5, cantidad: 3 },
    { id: 3, nombre: 'Papas fritas', precio: 4.5, cantidad: 1 },
  ]);

  // Calcular subtotal
  const subtotal = productos.reduce(
    (total, producto) => total + producto.precio * producto.cantidad,
    0
  );

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
                <th className="p-2">Cantidad</th>
                <th className="p-2">Precio Unitario</th>
                <th className="p-2 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="text-center text-slate-800">
              {productos.map((producto) => (
                <tr key={producto.id} className="border-b">
                  <td className="p-2">{producto.nombre}</td>
                  <td className="p-2">{producto.cantidad}</td>
                  <td className="p-2">${producto.precio.toFixed(2)}</td>
                  <td className="p-2 text-right">
                    ${(producto.precio * producto.cantidad).toFixed(2)}
                  </td>
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
          <button className="rounded bg-red-500 px-4 py-2 text-white transition hover:scale-110 hover:bg-red-600">
            Cobrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cuentas;
