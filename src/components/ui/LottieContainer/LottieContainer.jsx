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

export default function LottieContainer({ animationData, ...rest }) {
	const container = React.useRef(null);

	React.useEffect(() => {
		if (!container.current) return;

		const anim = Lottie.loadAnimation({
			container: container.current,
			renderer: "svg",
			loop: true,
			autoplay: true,
			animationData,
			rendererSettings: {
				preserveAspectRatio: "xMidYMid meet",
				progressiveLoad: true,
			},
		});

		return () => anim.destroy();
	}, [animationData]);

	return <span ref={container} className={css.container} {...rest} />;
}
