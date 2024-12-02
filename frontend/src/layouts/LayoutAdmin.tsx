import { Outlet } from 'react-router-dom'; //el outlet nos sirve para agregarle un componente dentro de este componente

// Componentes
import SideBar from '../components/Sidebar';
import BarraNavegacionMenu from '../components/BarraNavegacionMenu';

function LayoutAdmin() {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[10%,90%] xl:grid-cols-6">
      <SideBar />
      <div className="col-start-1 col-end-7 row-start-1 w-full">
        <BarraNavegacionMenu />
      </div>
      <div className="col-start-2 col-end-5 row-start-2 row-end-3 h-[90vh] overflow-y-scroll">
        <Outlet />
      </div>
      <div className="col-start-5 col-end-7 row-start-2 bg-slate-400">
        aqui va el componente donde se pone el pedido
      </div>
    </div>
  );
}
export default LayoutAdmin;
