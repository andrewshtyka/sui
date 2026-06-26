"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion, useScroll, useTransform } from "motion/react";

// assets

// components
import LottieContainer from "@/components/ui/LottieContainer/LottieContainer";

// constants

// data

// hooks

// providers / context

// styles
import css from "./ItemTextLottie.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function ItemTextLottie({ text, animationData }) {
	const barRef = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: barRef,
		offset: ["start end", "start 50%"],
	});
	const clipPath = useTransform(
		scrollYProgress,
		[0, 1],
		["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
	);

	return (
		<span ref={barRef} className={css.line}>
			<span className={css.container_lottie}>
				<LottieContainer animationData={animationData} />
			</span>
			<span className={css.container_text}>
				<span className={css.text}>{text}</span>
				<motion.span className={css.bar} style={{ clipPath }} />
			</span>
		</span>
	);
}
