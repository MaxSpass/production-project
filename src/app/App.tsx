import {Link} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
	const {theme, toggleTheme} = useTheme();
	return (
		<div className={`app ${theme}`}>
			<Navbar />
			<AppRouter />
			<button onClick={toggleTheme}>Toggle Theme</button>
		</div>
	);
};

export default App;