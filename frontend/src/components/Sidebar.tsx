import { Link } from 'react-router-dom';
import { useState } from 'react';

// Icons
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

function Sidebar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <aside
        className={`fixed top-0 z-50 flex h-[90%] w-[60%] flex-col justify-between overflow-y-scroll bg-slate-200 p-8 md:w-[40%] lg:w-[35%] xl:static xl:h-[90vh] xl:w-auto ${toggleMenu ? 'left-0' : '-left-full'} col-start-1 row-start-2 transition-all`}
      >
        <div className="">
          <h2 className="text-md mb-10 text-center font-black text-slate-700 lg:text-xl xl:text-2xl">
            Todas las Categorías<span className="text-slate-500">.</span>
          </h2>

          <nav className="">
            <ul className="flex flex-col gap-4">
              <li className="">
                <Link
                  to="categoria1"
                  className="flex items-center gap-3 rounded-lg px-4 py-2 transition-colors hover:bg-slate-400"
                >
                  Categoría 1
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="">
                <Link
                  to="categoria2"
                  className="flex items-center gap-3 rounded-lg px-4 py-2 transition-colors hover:bg-slate-400"
                >
                  Categoría 2
                </Link>
              </li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="">
                <Link
                  to="categoria3"
                  className="flex items-center gap-3 rounded-lg px-4 py-2 transition-colors hover:bg-slate-400"
                >
                  Categoría 3
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-sky-500 p-3 text-black xl:hidden"
      >
        {toggleMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>
    </>
  );
}

export default Sidebar;
