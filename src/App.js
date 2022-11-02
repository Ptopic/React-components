import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';

// Navbars
import Navbar1 from './components/navbars/Navbar1';

function App() {
	return (
		<AppContextProvider>
			<Navbar1></Navbar1>
			<h1>test</h1>
		</AppContextProvider>
	);
}

export default App;
