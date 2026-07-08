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
import { HeroTextHoverContext } from "@/providers/HeroTextHoverProvider";
import { PreloaderContext } from "@/providers/PreloaderProvider";

// styles
import css from "./Title.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Title({ children }) {
	const { isVisiblePreloader } = React.useContext(PreloaderContext);
	const { isHovered, setIsHovered } = React.useContext(HeroTextHoverContext);

	const { xNormal, yNormal } = useBlurPosition(isHovered);
	const mouseX = useTransform(xNormal, (value) => `${value * 100}%`);
	const mouseY = useTransform(yNormal, (value) => `${value * 100}%`);

	return (
		<motion.h1
			className={`f_h1 f_center ${css.title}`}
			style={{
				"--text-x": mouseX,
				"--text-y": mouseY,
			}}
			{...anim(variantsText, isVisiblePreloader)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{children}
		</motion.h1>
	);
}

const variantsText = {
	initial: {
		opacity: 0,
	},
	animate: (preloaderStatus) => ({
		opacity: preloaderStatus ? 0 : 1,
	}),
	transition: {
		delay: 0.25,
		duration: 1.5,
		ease: "easeInOut",
	},
};

function anim(obj, preloaderStatus) {
	return {
		variants: obj,
		initial: obj.initial,
		animate: obj.animate(preloaderStatus),
		transition: obj.transition,
	};
}
