import './navbar2.css';
import img from './images/tortugapng2.png';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Navbar2({ visible }) {
	const toggle = () => {
		document.body.classList.toggle('open');
		console.log(visible);
	};

	return (
		<nav className={`navbar2 ${visible ? 'visible' : ''}`}>
			<div className="navbar2-overlay" onClick={toggle}></div>

			<button type="button" className="navbar2-burger" onClick={toggle}>
				<MenuRoundedIcon fontSize="inherit"></MenuRoundedIcon>
			</button>

			<img src={img} alt="logo" className="navbar2-logo" />

			<button type="button" className="navbar2-burger-open" onClick={toggle}>
				<CloseRoundedIcon fontSize="inherit"></CloseRoundedIcon>
			</button>

			<nav className="navbar2-menu">
				<a href="#" className="active">
					Home
				</a>
				<a href="#">About</a>
				<a href="#">Info</a>
			</nav>
		</nav>
	);
}

export default Navbar2;
