import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Forum from './komponente/forum';
import Login from './komponente/login';
import Menu from './komponente/menu';
import Register from './komponente/register';
import Replies from './komponente/replies';
import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/kontakt';
import News from './pages/news';
import Services from './pages/services';

function App() {
	return (
		<div>
			<Router>
				<Menu />
				<Routes>
					<Route exact path="/" Component={Home} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/news" Component={News} />
					<Route path="/kontakt" Component={Contact} />
					<Route path="/about" Component={About} />
					<Route path="/services" Component={Services} />
					<Route path="/dashboard" Component={Forum} />
					<Route path="/:id/replies" element={<Replies />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
