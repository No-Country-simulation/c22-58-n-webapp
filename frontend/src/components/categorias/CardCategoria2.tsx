import { OnModuleInit } from "@nestjs/common";
import useMenu from '../../../store/Menu'
import useOrdenActual from '../../../store/OrdenActual';

function CardCategoria2() {
    const elMenu = useMenu((state: any) => state.categoria2);
    const ordenes = useOrdenActual((state: any) => state);
    
    return (
        <>
         <section className="flex flex-col justify-center items-center flex-wrap gap-3 mt-5 p-4">
            <div>
                <h1 className="text-xl text-slate-900 font-bold text-center pt-2 pb-5 lg:text-4xl">Menú Destacado</h1>
            </div>

            
                <div className="w-full flex flex-col justify-center items-center flex-wrap gap-5 md:justify-between md:flex-row lg:gap-9">
                    {elMenu.map((element: any, idx) => (
                        <div 
                            className="card w-[85%] border-double border-4 border-stone-700 flex flex-col gap-2 cursor-pointer md:w-[46%] xl:w-[31%] 2xl:w-[30%]"
                            key={idx}
                            onClick={() => 
                                ordenes.agregarALaOrden({
                                    nombre: element.nombre,
                                    precio: element.precio,
                                })
                            }
                        >                    
                        <div className="card-body p-2">
                            <img 
                                className="w-full h-28 lg:h-36" 
                                src={element.imagen}
                                alt={`Imagen de ${element.nombre}`}                            
                            />

                            <h5 className="card-title text-md font-bold text-slate-700  text-center pt-3 lg:text-lg xl:text-xl">{element.nombre}</h5>
                            <p className="text-end text-slate-700 text-md font-semibold pt-3 lg:text-lg xl:text-xl">{element.precio}</p>
                        </div>                    
                        
                        </div>

                    ))}
            </div>            
        </section>     
        </>
    );    

}

export default CardCategoria2;
