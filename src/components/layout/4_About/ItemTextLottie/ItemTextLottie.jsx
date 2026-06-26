// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

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
	return (
		<span className={`${css.line} ${css.line_lottie}`}>
			<LottieContainer animationData={animationData} />
			<span className={css.container_text}>
				<span className={css.bar} />
				<span className={css.text}>{text}</span>
			</span>
		</span>
	);
}
