import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import BarraNavegacionMenu from './components/BarraNavegacionMenu';
// import Cocina from './components/Cocina';

// Components Categoria
import CardCategoria1 from './components/categorias/CardCategoria1';
import CardCategoria2 from './components/categorias/CardCategoria2';
import CardCategoria3 from './components/categorias/CardCategoria3';

// Component
import Home from './pages/admin/Home' 


// Pages
import Error404 from './pages/Error404';

// Layouts
import LayoutAdmin from './layouts/LayoutAdmin';



function App() {
	return(
        <BrowserRouter>
           <Routes>
                <Route path="/" element={<LayoutAdmin />}>
                    <Route index element={<Home />} />
                    <Route path="categoria1" element={<CardCategoria1 />} />
                    <Route path="categoria2" element={<CardCategoria2 />} />
                    <Route path="categoria3" element={<CardCategoria3 />} />
                </Route>
                <Route path='*' element={<Error404 />} />
                
           </Routes>
        </BrowserRouter>
		
	);

	
}

export default App;
