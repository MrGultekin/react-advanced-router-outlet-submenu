import './App.scss';
import { PageWelcome } from './pages/PageWelcome';
import { PageBooks } from './pages/PageBooks';
import { PageAbout } from './pages/PageAbout';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageHowtos } from './pages/PageHowtos';

function App() {
	return (
		<div className="App">
			<h1>Personal Site</h1>
			<hr />
			<NavLink to="/welcome">Welcome</NavLink> |{' '}
			<NavLink to="/books">Books</NavLink> |{' '}
			<NavLink to="/howtos">Howtos</NavLink> |{' '}
			<NavLink to="/about">About</NavLink>
			<hr />
			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/books/*" element={<PageBooks />} />
				<Route path="/about" element={<PageAbout />} />
				<Route path="/howtos" element={<PageHowtos />} />
				<Route path="/" element={<Navigate to="welcome" replace />}/>
			</Routes>
		</div>
	);
}

export default App;
