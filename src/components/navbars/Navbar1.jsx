import './navbar1.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Navbar1() {
	const toggleMenuOpen = () => {
		document.body.classList.toggle('open');
	};

	return (
		<nav class="navbar">
			<div class="navbar-overlay" onClick={toggleMenuOpen}></div>

			<button type="button" class="navbar-burger" onClick={toggleMenuOpen}>
				<MenuIcon
					className="navbar-burger-icon"
					color="white"
					fontSize="large"
				></MenuIcon>
				{/* <CloseIcon
					className="navbar-burger-icon-closed"
					color="white"
					fontSize="large"
				></CloseIcon> */}
			</button>
			<h1 class="navbar-title">Navbar1</h1>

			<nav class="navbar-menu">
				<button
					type="button"
					class="navbar-burger-close"
					onClick={toggleMenuOpen}
				></button>
				<button type="button">Skills</button>
				<button type="button" class="active">
					Awards
				</button>
				<button type="button">Projects</button>
			</nav>
		</nav>
	);
}

export default Navbar1;
