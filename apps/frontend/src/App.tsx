import { Route, Routes } from 'react-router-dom';
import Login from '../../../frontend/src/components/login';
import Register from '../../../frontend/src/components/register';
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
