

function CardCategoria1() {
    return (
        <>
        <section className="flex flex-col justify-center items-center flex-wrap gap-3 mt-5 p-4">
            <div>
                <h1 className="text-2xl text-slate-900 font-bold text-center pb-5 lg:text-4xl">Menú Destacado</h1>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center flex-wrap gap-5 md:flex-row lg:gap-9">
            <div className="card w-[85%] border-double border-4 border-stone-700 flex flex-col gap-2">
                <div className="card-body p-2">
                    <img className="w-full h-40" src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg" alt="Imagen de los platos" />
                    <h5 className="card-title text-xl font-bold text-slate-700  text-center pt-3 lg:text-2xl">Nombre del plato</h5>
                    <p className="text-end text-slate-700 text-lg font-semibold pt-3 lg:text-2xl">$100.00</p>

                </div>
            </div>
            <div className="card w-[85%]  border-double border-4 border-stone-700 flex flex-col gap-2">
                <div className="card-body p-2">
                    <img className="w-full h-40" src="https://cdn.pixabay.com/photo/2022/01/20/08/24/fish-6951734_1280.jpg" alt="Imagen de los platos" />
                    <h5 className="card-title text-xl font-bold text-slate-700  text-center pt-3 lg:text-2xl">Nombre del plato</h5>
                    <p className="text-end text-slate-700 text-lg font-semibold pt-3 lg:text-2xl">$100.00</p>

                </div>
            </div>
            <div className="card w-[85%]  border-double border-4 border-stone-700 flex flex-col gap-2">
                <div className="card-body p-2">
                    <img className="w-full h-40" src="https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_1280.jpg" alt="Imagen de los platos" />
                    <h5 className="card-title text-xl font-bold text-slate-700  text-center pt-3 lg:text-2xl">Nombre del plato</h5>
                    <p className="text-end text-slate-700 text-lg font-semibold pt-3 lg:text-2xl">$100.00</p>

                </div>
            </div>
            <div className="card w-[85%]  border-double border-4 border-stone-700 flex flex-col gap-2">
                <div className="card-body p-2">
                    <img className="w-full h-40" src="https://cdn.pixabay.com/photo/2024/09/19/10/26/ai-generated-9058360_1280.jpg" alt="Imagen de los platos" />
                    <h5 className="card-title text-xl font-bold text-slate-700  text-center pt-3 lg:text-2xl">Nombre del plato</h5>
                    <p className="text-end text-slate-700 text-lg font-semibold pt-3 lg:text-2xl">$100.00</p>

                </div>
            </div>
            <div className="card w-[85%]  border-double border-4 border-stone-700 flex flex-col gap-2">
                <div className="card-body p-2">
                    <img className="w-full h-40" src="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg" alt="Imagen de los platos" />
                    <h5 className="card-title text-xl font-bold text-slate-700  text-center pt-3 lg:text-2xl">Nombre del plato</h5>
                    <p className="text-end text-slate-700 text-lg font-semibold pt-3 lg:text-2xl">$100.00</p>

                </div>
            </div>

            </div>
            

        </section>
        
        </>

    );
    
}

export default CardCategoria1;