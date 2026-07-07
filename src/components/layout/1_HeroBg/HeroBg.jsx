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

// styles
import css from "./HeroBg.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function HeroBg() {
	const ballBlackRef = React.useRef(null);

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
					{...anim(variantsBall)}
					onAnimationComplete={() => {
						ballBlackRef.current.style.display = "none";
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
	animate: {
		y: "-50%",
		x: "-50%",
		opacity: 0,
	},
	transition: {
		y: { duration: 1.5, delay: 0.1 },
		opacity: { duration: 1.5, delay: 0.6 },
		ease: cubicBezier(0.25, 0, 0.75, 1),
	},
};

function anim(obj) {
	return {
		variants: obj,
		initial: obj.initial,
		animate: obj.animate,
		transition: obj.transition,
	};
}
