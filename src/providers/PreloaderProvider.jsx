// context/PreloaderContext.jsx
"use client";

import React from "react";

export const PreloaderContext = React.createContext({
	isVisiblePreloader: true,
	setIsVisiblePreloader: () => {},
});

export default function PreloaderProvider({ children }) {
	const [isVisiblePreloader, setIsVisiblePreloader] = React.useState(true);

	return (
		<PreloaderContext.Provider
			value={{ isVisiblePreloader, setIsVisiblePreloader }}
		>
			{children}
		</PreloaderContext.Provider>
	);
}
