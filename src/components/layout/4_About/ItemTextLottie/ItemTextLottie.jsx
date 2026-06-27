"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import {
	motion,
	useInView,
	useScroll,
	useSpring,
	useTransform,
} from "motion/react";

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

export default function ItemTextLottie({ text, animationData, endPoint = 1 }) {
	const barRef = React.useRef(null);
	const isInView = useInView(barRef);

	const { scrollYProgress } = useScroll({
		target: barRef,
		offset: ["start end", "start 50%"],
	});
	const smoothProgress = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 20,
		mass: 0.5,
	});
	const clipPath = useTransform(
		smoothProgress,
		[0, endPoint],
		["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"]
	);

	return (
		<span ref={barRef} className={css.line}>
			<span className={css.container_lottie}>
				<LottieContainer
					animationData={animationData}
					isInView={isInView}
				/>
			</span>
			<span className={css.container_text}>
				<span className={css.text}>{text}</span>
				<motion.span className={css.bar} style={{ clipPath }} />
			</span>
		</span>
	);
}
