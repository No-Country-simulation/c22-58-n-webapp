import { Link } from "react-router-dom";
import { useState } from "react";

// Icons
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Sidebar() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
        <aside className={`xl:h-[100vh] bg-slate-50 overflow-y-scroll fixed xl:static w-[45%] md:w-[40%] lg:w-[35%] xl:w-auto h-full top-0 p-8 flex flex-col justify-between z-40 ${toggleMenu ? "left-0" : "-left-full"} transition-all`}>
            <div className="">
                <h2 className="text-center text-md font-black text-slate-700 mb-10 md:text-lg lg:text-xl xl:text-2xl">Todas las Categorías<span className="text-slate-500">.</span></h2>
            
                <nav className="">
                    <ul className="flex flex-col gap-4">
                        <li className="">
                            <Link to='categoria1' className="flex font-semibold text-slate-600 text-md items-center gap-3 py-2 px-4 rounded-lg hover:bg-slate-400 transition-colors md:text-lg xl:text-xl">Categoría 1</Link>
                        </li>                  
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <li className="">
                            <Link to="categoria2" className="flex font-semibold text-slate-600 text-md items-center gap-3 py-2 px-4 rounded-lg hover:bg-slate-400 transition-colors md:text-lg xl:text-xl">Categoría 2</Link>
                        </li>                  
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <li className="">
                            <Link to="categoria3" className="flex font-semibold text-slate-600 text-md items-center gap-3 py-2 px-4 rounded-lg hover:bg-slate-400 transition-colors md:text-lg xl:text-xl">Categoría 3</Link>
                        </li>                  
                    </ul>
                </nav>
            </div>
        </aside>
        <button 
            onClick={() => setToggleMenu(!toggleMenu)} 
            className="xl:hidden fixed bottom-4 right-4 bg-sky-500 text-black p-3 rounded-full z-50">
                {
                    toggleMenu ? <RiCloseLine /> : <RiMenu3Line />
                }
                    
        </button>
        </>
    );
    
}

export default Sidebar;