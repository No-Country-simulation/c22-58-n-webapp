import { OnModuleInit } from '@nestjs/common';
import useMenu from '../../../store/Menu';
import useOrdenActual from '../../../store/OrdenActual';

function CardCategoria1() {
  const elMenu = useMenu((state: any) => state.categoria1);
  const ordenes = useOrdenActual((state: any) => state);

  return (
    <section className="mt-5 flex flex-col flex-wrap items-center justify-center gap-3 p-4">
      <div>
        <h1 className="pb-5 pt-2 text-center text-xl font-bold text-slate-900 lg:text-4xl">
          Menú Destacado
        </h1>
      </div>

      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-5 md:flex-row md:justify-between lg:gap-9">
        {elMenu.map((element: any, idx) => (
          <div
            className="card flex w-[85%] cursor-pointer flex-col gap-2 border-4 border-double border-stone-700 md:w-[46%] xl:w-[31%] 2xl:w-[30%]"
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
                className="h-28 w-full lg:h-36"
                src={element.imagen}
                alt={`Imagen de ${element.nombre}`}
              />

              <h5 className="card-title text-md pt-3 text-center font-bold text-slate-700 lg:text-lg xl:text-xl">
                {element.nombre}
              </h5>
              <p className="text-md pt-3 text-end font-semibold text-slate-700 lg:text-lg xl:text-xl">
                ${element.precio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardCategoria1;
