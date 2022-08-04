import React, { useContext } from "react";
import { ThemeContext } from "./context/theme-provider";
import classNames from "classnames";
import "./App.css";

const App = () => {
	const { theme, setTheme } = useContext(ThemeContext);
	const themeClassNames = classNames("App", theme);

	const changeTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	};

	return (
		<div className={themeClassNames}>
			<h2>Your theme is</h2>
			<h1>"{theme}"</h1>
			<button onClick={changeTheme}>Change</button>
		</div>
	);
};

export default App;