import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';

// Navbars
import Navbar1 from './components/navbars/Navbar1';
import Navbar2 from './components/navbars/Navbar2';

function App() {
	return (
		<AppContextProvider>
			{/* <Navbar1></Navbar1> */}
			<Navbar2></Navbar2>
		</AppContextProvider>
	);
}

export default App;
