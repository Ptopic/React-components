import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { AppContextProvider } from './context/AppContext';

// Navbars
import Navbar1 from './components/navbars/Navbar1';
import Navbar2 from './components/navbars/Navbar2';
import { useInView } from 'react-intersection-observer';

function App() {
	const myRef = useRef();
	// const { ref: myRef, inView: ElVisible } = useInView();
	const [ElVisible, setElVisible] = useState();
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			let entry = entries[0];
			console.log('entry', entry);
			setElVisible(entry.isIntersecting);
		});

		observer.observe(myRef.current);

		if (ElVisible) {
			observer.unobserve(myRef.current);
		}
	}, []);
	return (
		<AppContextProvider>
			{/* <Navbar1></Navbar1> */}
			<Navbar2 visible={ElVisible}></Navbar2>

			{/* Boilerplate content */}
			<main className="main-container">
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
					consequatur nemo rem dicta assumenda. Id incidunt quas distinctio.
					Amet reiciendis molestias ipsum dicta voluptate, quia consectetur
					ducimus corporis tenetur perferendis autem ea dignissimos. Aspernatur
					consequatur, delectus ut unde natus maxime.
				</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p ref={myRef}>
					Write Something Write Something Write Something Write Something..
				</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
				<p>Write Something Write Something Write Something Write Something..</p>
			</main>
		</AppContextProvider>
	);
}

export default App;
