"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion, useTransform } from "motion/react";

// assets

// components

// constants

// data

// hooks
import useBlurPosition from "@/hooks/useBlurPosition";

// providers / context

// styles
import css from "./Title.module.css";

// utility
import React from "react";
import { HeroTextHoverContext } from "@/providers/HeroTextHoverProvider";

// #endregion ===========================

export default function Title({ children }) {
	const { isHovered, setIsHovered } = React.useContext(HeroTextHoverContext);

	const { xNormal, yNormal } = useBlurPosition(isHovered);
	const mouseX = useTransform(xNormal, (value) => `${value * 100}%`);
	const mouseY = useTransform(yNormal, (value) => `${value * 100}%`);

	return (
		<motion.h1
			className={`f_h1 ${css.title}`}
			style={{
				"--text-x": mouseX,
				"--text-y": mouseY,
			}}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{children}
		</motion.h1>
	);
}
