import {Suspense, useContext} from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import {AboutPageLazy} from "./pages/AboutPage/AboutPage.lazy";
import {MainPageLazy} from "./pages/MainPage/MainPage.lazy";
import './styles/index.scss';
import { useTheme } from './theme/useTheme';

const App = () => {
	const {theme, toggleTheme} = useTheme();
	return (
		<div className={`app ${theme}`}>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<Link to={'/'}>Main</Link>
			<Link to={'/about'}>About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path={'/about'} element={<AboutPageLazy/>}/>
					<Route path={'/'} element={<MainPageLazy/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;