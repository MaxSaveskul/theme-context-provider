import React, { createContext, useState, useLayoutEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const LS_THEME = "theme";
	const defaultTheme = localStorage.getItem(LS_THEME) ? localStorage.getItem(LS_THEME) : window.matchMedia("(prefers-color-scheme:dark)").matches ? 'dark' : "light";
	const [theme, setTheme] = useState(defaultTheme);
	localStorage.setItem(LS_THEME, theme);
	const setupTheme = window.matchMedia("(prefers-color-scheme:dark)");


	useLayoutEffect(() => {
		setupTheme.addListener((e) => {
			const darkMode = e.matches;
			setTheme(darkMode ? "dark" : "light");
			localStorage.setItem(LS_THEME, theme);
		});
	}, [theme, setupTheme, setTheme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
