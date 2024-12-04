function Categorias() {
    return (
        <section className="w-full flex flex-col justify-center items-center p-5">
            <h1 className="text-lg text-center font-bold pb-5 lg:text-xl xl:text-4xl">Bienvenido a Categorías</h1>
            <p className="text-start text-slate-700 font-semibold pb-3 lg:text-lg xl:text-xl">Descubre nuestras deliciosas categorías de platos. Selecciona una categoría desde el menú lateral para ver más.</p>
            <p className="text-start text-slate-700 font-semibold pb-2 lg:text-lg xl:text-xl">¡Esperamos que disfrutes de nuestra comida!</p>

            <div className="text-center pt-3 text-slate-700">
                <h2 className="text-lg text-slate-700 font-bold lg:text-xl xl:text-4xl xl:pt-10">Nuestras Especialidades</h2>
                <p className="text-slate-700 text-start font-semibold pt-2 lg:text-lg xl:text-xl xl:pt-8">Explora nuestras opciones, desde entrantes hasta platos principales.</p>
            </div>

        </section>
    );
    
};

export default Categorias;