"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'
import Lottie, { AnimationItem } from "lottie-web";

// assets

// components

// constants

// data

// hooks

// providers / context

// styles
import css from "./LottieContainer.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function LottieContainer({
	animationData,
	isInView = false,
	height = "var(--font-size-h3)",
	...rest
}) {
	const container = React.useRef(null);
	const animRef = React.useRef(null);

	// create instance of nimation (once)
	React.useEffect(() => {
		if (!container.current) return;

		const anim = Lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: false,
			autoplay: true,
			animationData,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid meet",
				progressiveLoad: true,
			},
		});

		animRef.current = anim;

		return () => {
			anim.destroy();
			animRef.current = null;
		};
	}, [animationData]);

	// play lottie, when isInView === true
	React.useEffect(() => {
		if (isInView && animRef.current) {
			animRef.current.goToAndPlay(0, true);
		}
	}, [isInView]);

	return (
		<span
			ref={container}
			className={css.container}
			style={{ height }}
			{...rest}
		/>
	);
}
