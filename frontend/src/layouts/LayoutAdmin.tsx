import { Outlet } from "react-router-dom"; //el outlet nos sirve para agregarle un componente dentro de este componente

// Componentes
import SideBar from "../components/Sidebar";
import BarraNavegacionMenu from "../components/BarraNavegacionMenu";

function LayoutAdmin() {
    return (
       <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
            <SideBar />
            <div className="w-full xl:col-span-5">
                <BarraNavegacionMenu />
                <div className="h-[90vh] overflow-y-scroll">
                    <Outlet />
                </div>                
            </div>
       </div>
    );
}
export default LayoutAdmin;