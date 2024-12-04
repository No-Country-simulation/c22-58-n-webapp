import { useState } from "react";
// Icons
import { RiDeleteBin6Line } from "react-icons/ri";

const OrdenActual = () => {
    //Estado para los productos en la orden
    const [productos, setProductos] = useState([
        { id: 1, nombre: "Producto 1", precio: 10 },
        { id: 2, nombre: "Producto 2", precio: 20 },
        { id: 3, nombre: "Producto 3", precio: 30 },
    ]);

    //Función para eliminar el producto
    const eliminarProducto = (id: number) => {
        //Filtrar los productos para eliminar el que se seleccionó
        setProductos(productos.filter((producto) => producto.id !== id));
    };

    return (
        <main className="w-full flex justify-center items-center">        
            <aside className="w-full px-2 pt-4 top-0 right-0 text-center xl:w-[70%]">
                <header className="bg-blue-600 mt-[4.5rem] mb-7 h-[4rem] flex justify-center items-center xl:h-[5rem]">
                    <h3 className="pb-5 text-white text-xl text-center font-bold lg:text-2xl xl:pb-3 2xl:text-4xl">Orden Actual</h3>
                </header>                
                <div className="flex flex-col pb-8">
                    {productos.length === 0 ? (
                        <p className="text-lg text-center pb-10 xl:text-4xl">No hay productos en la orden.</p>
                    ) : (
                        productos.map(producto => (
                        <div key={producto.id} className="flex justify-between items-center h-20 bg-sky-50 border-solid border-2 border-slate-400 gap-3 p-3 mb-4">
                            <div className="">
                            <h4 className="text-sm font-bold text-center lg:text-xl">{producto.nombre}</h4>
                            <p className="text-center text-sm font-semibold lg:text-lg">${producto.precio}</p>
                            </div>
                            <button
                                onClick={() => eliminarProducto(producto.id)}
                                className="flex justify-center items-center bg-red-500 text-white p-2 rounded lg:w-16 lg:h-10 lg:text-2xl"
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
                    <span>$300.00</span>
                    </div>
                    <button className="h-10 w-full bg-red-500 text-xs rounded-md lg:text-xl uppercase text-white">
                    enviar a cocina
                    </button>
                </footer>
            </aside>
        </main>
    );
}
export default OrdenActual;