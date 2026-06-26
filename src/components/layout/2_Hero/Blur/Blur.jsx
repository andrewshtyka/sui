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

// styles
import css from "./Blur.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Blur() {
	const { isHovered } = React.useContext(HeroTextHoverContext);

	const { xNormal, yNormal } = useBlurPosition(isHovered);
	const mouseX = useTransform(xNormal, (value) => `${value * 100}%`);
	const mouseY = useTransform(yNormal, (value) => `${value * 100}%`);

	return (
		<motion.div
			className={css.gradient_blur}
			style={{
				"--mouse-x": mouseX,
				"--mouse-y": mouseY,
			}}
		>
			<div />
			<div />
		</motion.div>
	);
}
