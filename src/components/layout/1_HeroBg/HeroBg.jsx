"use client";

// #region ============================== Imports

// animation
// import * as motion from "motion/react-client";
import { motion, cubicBezier } from "motion/react";

// assets

// components
import Image from "next/image";

// constants

// data
import { dataHero } from "@/data/dataHero";

// hooks

// providers / context
import { PreloaderContext } from "@/providers/PreloaderProvider";

// styles
import css from "./HeroBg.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function HeroBg() {
	const ballBlackRef = React.useRef(null);
	const { isVisiblePreloader } = React.useContext(PreloaderContext);

	return (
		<div className={css.container}>
			<div className={css.container_balls}>
				{/* image */}
				<div className={css.stage}>
					<Image
						src={dataHero.img.src}
						alt={dataHero.img.alt}
						className={css.img}
						preload="eager"
					/>
					<div className={css.mask} />
				</div>

				{/* blurred ball */}
				<motion.div
					ref={ballBlackRef}
					className={css.ball_black}
					{...anim(variantsBall, isVisiblePreloader)}
					onAnimationComplete={() => {
						if (!isVisiblePreloader) {
							ballBlackRef.current.style.display = "none";
						}
					}}
				/>
			</div>
			<div className={css.overlay} />
		</div>
	);
}

const variantsBall = {
	initial: {
		y: "0%",
		x: "-50%",
		opacity: 1,
	},
	animate: (preloaderStatus) => ({
		y: preloaderStatus ? "0%" : "-50%",
		x: preloaderStatus ? "-50%" : "-50%",
		opacity: preloaderStatus ? 1 : 0,
	}),
	transition: {
		y: { duration: 1.5, delay: 0 },
		opacity: { duration: 1.5, delay: 0.3 },
		ease: cubicBezier(0.25, 0, 0.75, 1),
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
