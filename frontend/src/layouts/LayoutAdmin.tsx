import { Outlet } from 'react-router-dom'; //el outlet nos sirve para agregarle un componente dentro de este componente

// Componentes
import SideBar from "../components/Sidebar";
import BarraNavegacionMenu from "../components/BarraNavegacionMenu";
import OrdenActual from "../components/ordenActual/ordenActual";

function LayoutAdmin() {
    return (
       <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
            <SideBar />
            <div className="w-full xl:col-span-5">
                <BarraNavegacionMenu />
                <div className="w-[55%] h-[90vh] overflow-y-scroll xl:w-[65%]">
                    <Outlet />
                </div>
                <div className="w-[45%] overflow-y-scroll fixed h-screen top-0 right-0 p-2 flex flex-col justify-between z-40 transition-all md:w-[43%] lg:pr-6  xl:absolute xl:w-[40%] xl:h-[100vh] xl:pr-3 2xl:w-[30%] 2xl:items-center">
                <OrdenActual />
            </div>                
            </div>
            
       </div>
    );
}
export default LayoutAdmin;
