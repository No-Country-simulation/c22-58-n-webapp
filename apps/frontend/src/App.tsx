import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/login';
import Register from './components/Register/register';
import './index.css';

function App() {
	return (
		<>
			<Routes>

				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />

			</Routes>
		</>
	);
}

export default App;
