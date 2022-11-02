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
			</button>
			<h1 class="navbar-title">Awards</h1>

			<nav class="navbar-menu">
				<button
					type="button"
					class="navbar-burger-close"
					onClick={toggleMenuOpen}
				>
					<CloseIcon
						className="navbar-burger-icon"
						color="white"
						fontSize="large"
					></CloseIcon>
				</button>
				<a type="button">Skills</a>
				<a type="button" class="active">
					Awards
				</a>
				<a type="button">Projects</a>
			</nav>
		</nav>
	);
}

export default Navbar1;
