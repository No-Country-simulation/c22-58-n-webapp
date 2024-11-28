import './index.css';
import Cocina from './components/Cocina';
import Manager from './components/Manager';
import Mesas from './components/Mesas';
import Login from './components/Login';
import Register from './components/Register';
import Seleccion from './components/Seleccion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/seleccion" element={<Seleccion />} />
        <Route path="/mesas" element={<Mesas />} />
        <Route path="/cocina" element={<Cocina />} />
        <Route path="/manager" element={<Manager />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
