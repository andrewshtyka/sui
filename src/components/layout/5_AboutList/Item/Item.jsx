"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion, useInView } from "motion/react";

// assets

// components
import DottedLine from "@/components/ui/DottedLine/DottedLine";
import LottieContainer from "@/components/ui/LottieContainer/LottieContainer";

// constants

// data

// hooks
import useRevealSplitTextColored from "@/hooks/useRevealSplitTextColored";

// providers / context

// styles
import css from "./Item.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Item({ id, text, animationData, isLast }) {
	const itemRef = React.useRef(null);
	const isInView = useInView(itemRef);
	useRevealSplitTextColored(itemRef);

	return (
		<li key={id} className={css.item}>
			<div className={css.container}>
				<span ref={itemRef} className={`f_h5`}>
					{text}
				</span>
				<span className={css.container_lottie}>
					<LottieContainer
						animationData={animationData}
						isInView={isInView}
						height="100%"
					/>
				</span>
			</div>

			{!isLast && <DottedLine color="var(--color-gray-800)" />}
		</li>
	);
}
