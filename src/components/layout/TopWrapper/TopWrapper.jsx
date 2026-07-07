"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion, useScroll, useTransform } from "motion/react";

// assets

// components

// constants

// data

// hooks

// providers / context

// styles
import css from "./TopWrapper.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function TopWrapper({ children }) {
	const containerRef = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "100.5% end"],
	});
	const width = useTransform(
		scrollYProgress,
		[0, 1, 1],
		["0%", "100%", "0%"]
	);

	return (
		<div ref={containerRef} className={css.container}>
			{children}
			<motion.div className={css.bar} style={{ width }} />
		</div>
	);
}
