"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components

// constants

// data

// hooks

// providers / context

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export const HeroTextHoverContext = React.createContext({
	isHovered: false,
	setIsHovered: () => {},
});

export default function HeroTextHoverProvider({ children }) {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<HeroTextHoverContext.Provider value={{ isHovered, setIsHovered }}>
			{children}
		</HeroTextHoverContext.Provider>
	);
}
