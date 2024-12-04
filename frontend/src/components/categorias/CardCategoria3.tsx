function CardCategoria3() {
    return (
        <>
        <section className="flex flex-col justify-center items-center flex-wrap gap-3 mt-5 p-4">
            <div>
                <h1 className="text-xl text-slate-900 font-bold text-center pt-2 pb-5 lg:text-4xl">Menú Destacado</h1>
            </div>
            
            <div className="w-full flex flex-col justify-center items-center flex-wrap gap-5 md:justify-between md:flex-row lg:gap-9">

                <div className="card w-[85%] border-double border-4 border-stone-700 flex flex-col gap-2 md:w-[46%] xl:w-[31%]">
                    <div className="card-body p-2">
                        <img className="w-full h-36" src="https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg" alt="Imagen de los platos" />
                        <h5 className="card-title text-md font-bold text-slate-700  text-center pt-3 lg:text-lg xl:text-xl">Nombre del plato</h5>
                        <p className="text-end text-slate-700 text-md font-semibold pt-3 lg:text-lg xl:text-xl">$100.00</p>

                    </div>
                </div>
                <div className="card w-[85%] border-double border-4 border-stone-700 flex flex-col gap-2 md:w-[46%] xl:w-[31%]">
                    <div className="card-body p-2">
                        <img className="w-full h-36" src="https://cdn.pixabay.com/photo/2016/11/18/14/39/beans-1834984_1280.jpg" alt="Imagen de los platos" />
                        <h5 className="card-title text-md font-bold text-slate-700  text-center pt-3 lg:text-lg xl:text-xl">Nombre del plato</h5>
                        <p className="text-end text-slate-700 text-md font-semibold pt-3 lg:text-lg xl:text-xl">$100.00</p>

                    </div>
                </div>
                <div className="card w-[85%] border-double border-4 border-stone-700 flex flex-col gap-2 md:w-[46%] xl:w-[31%]">
                    <div className="card-body p-2">
                        <img className="w-full h-36" src="https://cdn.pixabay.com/photo/2017/03/13/13/39/pancakes-2139844_1280.jpg" alt="Imagen de los platos" />
                        <h5 className="card-title text-md font-bold text-slate-700  text-center pt-3 lg:text-lg xl:text-xl">Nombre del plato</h5>
                        <p className="text-end text-slate-700 text-md font-semibold pt-3 lg:text-lg xl:text-xl">$100.00</p>

                    </div>
                </div>
                <div className="card w-[85%] border-double border-4 border-stone-700 flex flex-col gap-2 md:w-[46%] xl:w-[31%]">
                    <div className="card-body p-2">
                        <img className="w-full h-36" src="https://cdn.pixabay.com/photo/2024/02/17/01/45/ai-generated-8578594_1280.jpg" alt="Imagen de los platos" />
                        <h5 className="card-title text-md font-bold text-slate-700  text-center pt-3 lg:text-lg xl:text-xl">Nombre del plato</h5>
                        <p className="text-end text-slate-700 text-md font-semibold pt-3 lg:text-lg xl:text-xl">$100.00</p>

                    </div>
                </div>
                <div className="card w-[85%] border-double border-4 border-stone-700 flex flex-col gap-2 md:w-[46%] xl:w-[31%]">
                    <div className="card-body p-2">
                        <img className="w-full h-36" src="https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_1280.jpg" alt="Imagen de los platos" />
                        <h5 className="card-title text-md font-bold text-slate-700  text-center pt-3 lg:text-lg xl:text-xl">Nombre del plato</h5>
                        <p className="text-end text-slate-700 text-md font-semibold pt-3 lg:text-lg xl:text-xl">$100.00</p>

                    </div>
                </div>

            </div>
            

        </section>
        
        </>

    );
    
}

export default CardCategoria3;