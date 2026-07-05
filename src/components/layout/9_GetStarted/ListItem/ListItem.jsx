"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { cubicBezier, motion, useInView } from "motion/react";

// assets

// components
import React from "react";
import Link from "next/link";
import DottedLine from "@/components/ui/DottedLine/DottedLine";
import ButtonList from "../ButtonList/ButtonList";

// constants

// data

// hooks

// providers / context

// styles
import css from "./ListItem.module.css";

// utility
import LottieContainer from "@/components/ui/LottieContainer/LottieContainer";

// #endregion ===========================

export default function ListItem({ title, text, button, lottie }) {
	const ref = React.useRef(null);
	const isInView = useInView(ref);

	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<motion.li
			ref={ref}
			className={css.container}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onFocus={() => setIsHovered(true)}
			onBlur={() => setIsHovered(false)}
			style={{ zIndex: isHovered ? 1 : 0 }}
		>
			<span className={css.container_line}>
				<DottedLine />
			</span>
			<motion.div
				className={css.bg_overlay}
				initial={{ "--isDesktop": "inset(0% 0% 100% 0%)" }}
				animate={{
					"--isDesktop": isHovered
						? "inset(0% 0% 0% 0%)"
						: "inset(0% 0% 100% 0%)",
				}}
			/>

			<Link href="#" className={css.content}>
				{/* part 1 */}
				<div className={css.part_1}>
					<motion.div
						className={css.container_lottie_desktop}
						{...anim(variantsBox, isHovered)}
					>
						<motion.span
							className={css.lottie}
							{...anim(variantsLottie, isHovered)}
						>
							<LottieContainer
								animationData={lottie}
								isInView={isInView}
								height="100%"
							/>
						</motion.span>
					</motion.div>
					<div className={css.container_lottie_mobile}>
						<LottieContainer
							animationData={lottie}
							isInView={isInView}
							backgroundColor="transparent"
						/>
					</div>
					<h3 className={`f_h4 ${css.title}`}>{title}</h3>
				</div>

				{/* part 2 */}
				<div className={css.part_2}>
					<motion.p
						className={`f_body_2 ${css.text}`}
						initial={{ "--opacity-desktop": 0.4 }}
						animate={{
							"--opacity-desktop": isHovered ? 1 : 0.4,
						}}
					>
						{text}
					</motion.p>
					<span className={css.container_btn}>
						<ButtonList data={button} isHoveredCard={isHovered} />
					</span>
				</div>
			</Link>
		</motion.li>
	);
}

const variantsBox = {
	initial: {
		opacity: 1,
	},
	animate: (state) => ({
		"--applied-width": state ? "var(--font-size-h3)" : "var(--width)",
		opacity: state ? [0, 1, 0, 1, 0, 1] : [1, 0, 1, 0, 1, 0, 1],
	}),
	transition: (state) => ({
		"--applied-width": {
			delay: state ? 0.5 : 0,
			duration: 0.4,
			ease: state
				? cubicBezier(0.5, 0, 0.25, 1)
				: cubicBezier(1, 0.25, 0, 0.5),
		},
		opacity: {
			delay: state ? 0 : 0.4,
			duration: 0.7,
			ease: "easeInOut",
		},
	}),
};

const variantsLottie = {
	initial: {
		y: "100%",
	},
	animate: (state) => ({
		y: state ? 0 : "100%",
	}),
	transition: (state) => ({
		delay: state ? 0.4 : 0,
		duration: 0.3,
		ease: "easeInOut",
	}),
};

function anim(obj, state) {
	return {
		variants: obj,
		initial: obj.initial,
		animate: obj.animate(state),
		transition: obj.transition(state),
	};
}
