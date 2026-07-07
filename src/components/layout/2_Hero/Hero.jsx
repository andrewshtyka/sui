"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { cubicBezier, motion } from "motion/react";

// assets

// components
import ButtonPrimary from "@/components/ui/ButtonPrimary/ButtonPrimary";
import Blur from "./Blur/Blur";
import Title from "./Title/Title";

// constants

// data
import { dataHero } from "@/data/dataHero";

// hooks
import useRevealSplitTextInView from "@/hooks/useRevealSplitTextInView";

// providers / context

// styles
import css from "./Hero.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Hero() {
	const ref = React.useRef(null);
	useRevealSplitTextInView(ref, 1);

	return (
		<section className={css.section}>
			<Title>{dataHero.title}</Title>
			<Blur />

			<div className={css.bottom}>
				<p ref={ref} className={`f_body_1 ${css.subtitle}`}>
					{dataHero.subtitle}
				</p>

				<motion.div
					className={css.container_buttons}
					{...anim(variantsButtons)}
				>
					<ButtonPrimary color="dark">
						{dataHero.btn.dark}
					</ButtonPrimary>
					<ButtonPrimary color="light">
						{dataHero.btn.light}
					</ButtonPrimary>
				</motion.div>
			</div>
		</section>
	);
}

const variantsButtons = {
	initial: {
		y: "75%",
		opacity: 0,
	},
	animate: {
		y: "0",
		opacity: 1,
	},
	transition: {
		duration: 1.25,
		delay: 1.25,
		ease: cubicBezier(0, 0, 0.25, 1),
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
