import { Outlet } from 'react-router-dom'; //el outlet nos sirve para agregarle un componente dentro de este componente

// Componentes
import SideBar from '../components/Sidebar';
import BarraNavegacionMenu from '../components/BarraNavegacionMenu';
import OrdenActual from '../components/ordenActual/OrdenActual';
import useMesas from '../../store/Mesas';

function LayoutAdmin() {
  return (
    <div className="grid min-h-screen grid-cols-1 xl:grid-cols-6">
      <SideBar />
      <div className="w-full xl:col-span-5">
        <BarraNavegacionMenu />
        <div className="h-[90vh] w-[55%] overflow-y-scroll xl:w-[65%]">
          <Outlet />
        </div>
        <div className="fixed right-[-100px] top-[40px] z-40 flex h-screen w-[40%] flex-col justify-between overflow-y-scroll p-[auto] transition-all md:w-[43%] lg:pr-6 xl:absolute xl:h-[80vh] xl:w-[40%] xl:pr-3">
          <OrdenActual />
        </div>
      </div>
    </div>
  );
}
export default LayoutAdmin;
