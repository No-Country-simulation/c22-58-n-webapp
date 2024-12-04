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
        <aside className="w-full px-2 pt-4 top-0 right-0 text-center xl:w-[70%]">
            <h3 className="pb-5 text-xl text-center font-bold pt-28 lg:text-2xl xl:pb-14 2xl:text-4xl">Orden Actual</h3>
            <div className="flex flex-col">
                {productos.length === 0 ? (
                    <p className="text-lg text-center xl:text-4xl">No hay productos en la orden.</p>
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
        </aside>
    );

}

export default OrdenActual;