//import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { RiDeleteBin6Line } from 'react-icons/ri';
import useOrdenActual from '../../../store/OrdenActual';
import useMesas from '../../../store/Mesas';
import usePedidos from '../../../store/Pedidos';
import { useNavigate } from 'react-router-dom';

//Components
import useOrdenActual from "../../../store/OrdenActual";
import useMesas from "../../../store/Mesas";
import usePedidos from "../../../store/Pedidos";

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
            mesa: `Mesa: ${mesa}`,
            items: productos.map(producto => producto.nombre),
            total: total,
            completado: false,
        };
        console.log(elPedido);

        agregarPedido(elPedido); //se agrega el pedido al store
        ordenes.limpiarOrden();
        navigate("/cocina");

    }
    

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
    function elTotal(element:any) {
        element.forEach((element: any) => {
            total += element.precio;            
        });              
    }
    elTotal(productos)

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
                        productos.map((producto: any, idx) => (

                            <div key={idx} className="flex justify-between items-center h-20 bg-sky-50 border-solid border-2 border-slate-400 gap-3 p-3 mb-4">
                                <div className="">
                                    <h4 className="text-sm font-bold text-center lg:text-xl">{producto.nombre}</h4>
                                    <p className="text-center text-sm font-semibold lg:text-lg">${producto.precio}</p>
                                </div>
                                <button
                                onClick={() => eliminarProducto(producto.nombre)}
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
                    <span>${total}.00</span>
                    </div>
                    <button 
                        className="h-10 w-full bg-red-500 text-xs rounded-md lg:text-xl uppercase text-white"
                        onClick={handleEnviarCocina}
                    >
                        enviar a cocina
                    </button>
                </footer>
            </aside>
            <button onClick={() => navigate('/cocina')}>Ir a cocina</button>
        </main>
    );
}
export default OrdenActual;