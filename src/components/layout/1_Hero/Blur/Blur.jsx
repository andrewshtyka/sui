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
import usePointerPosition from "@/hooks/usePointerPosition";

// providers / context

// styles
import css from "./Blur.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Blur({ isHovered }) {
	const { xNormalSpring, yNormalSpring } = usePointerPosition(isHovered);
	const mouseX = useTransform(xNormalSpring, (value) => `${value * 100}%`);
	const mouseY = useTransform(yNormalSpring, (value) => `${value * 100}%`);

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
