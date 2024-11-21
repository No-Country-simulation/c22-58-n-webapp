import { Route, Routes } from 'react-router-dom';
import LoginDashboard from './components/LoginDashboard/LoginDashboard';
import './index.css';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<LoginDashboard />} />


			</Routes>
		</>
	);
}

export default App;
