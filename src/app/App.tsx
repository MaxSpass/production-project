import {Suspense, useContext} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
	const {theme, toggleTheme} = useTheme();
	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPage/>}/>
					<Route path={'/'} element={<MainPage/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;