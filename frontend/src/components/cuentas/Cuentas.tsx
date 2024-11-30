import { useParams } from "react-router-dom";
import { useState } from "react";

const Cuentas = () => {
    // Obtenemos los parametros de la url
    const { numeroMesa, totalCuenta } = useParams<{ numeroMesa: string, totalCuenta: string}>();

     // Estado para manejar los productos de la cuenta
     const [productos, setProductos] = useState([
        { id: 1, nombre: "Hamburguesa", precio: 10.99, cantidad: 2 },
        { id: 2, nombre: "Refresco", precio: 2.50, cantidad: 3 },
        { id: 3, nombre: "Papas fritas", precio: 4.50, cantidad: 1 }
    ]);

    // Calcular subtotal
    const subtotal = productos.reduce((total, producto) => 
        total + (producto.precio * producto.cantidad), 0);
    
    // Calcular impuestos (por ejemplo, 16%)
    const impuestos = subtotal * 0.16;

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center">
            {/* Card Header */}
            <div className="flex flex-col items-center justify-center">
                <div className="text-center">
                    <h2 className="text-xl font-bold text-slate-600 p-3 md:text-3xl">Cuenta de Mesa #{numeroMesa}</h2>
                    <span className="text-lg">Fecha: {new Date().toLocaleDateString()}</span>
                </div>
                {/* Detalle de productos */}
                <div className="p-6">
                   <h3 className="text-slate-600 text-xl font-semibold mb-4">Detalle de Consumo</h3>
                   <table className="w-full text-left">
                        <thead className="bg-gray-200">
                            <tr className="text-slate-700">
                                <th className="p-2">Producto</th>
                                <th className="p-2">Cantidad</th>
                                <th className="p-2">Precio Unitario</th>
                                <th className="p-2 text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-800 text-center">
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
                 <div className="w-60 p-4 bg-gray-100 border-t md:p-6">
                    <div className="flex justify-between mb-2">
                        <span>Subtotal:</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Impuestos (16%):</span>
                        <span>${impuestos.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-xl">
                        <span>Total:</span>
                        <span>${(subtotal + impuestos).toFixed(2)}</span>
                    </div>
                </div>

                {/* Acciones */}
                <div className="mt-3 p-4 flex justify-between gap-4">
                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 hover:scale-110 transition">
                        Imprimir Cuenta
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:scale-110 transition">
                        Cobrar
                    </button>
                </div>
            </div>
        </div>    
        
    );
}

export default Cuentas;