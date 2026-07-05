"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { cubicBezier, motion } from "motion/react";

// assets

// components
import Image from "next/image";

// constants

// data

// hooks
import useHoverSplitParentExternal from "@/hooks/useHoverSplitParentExternal";

// providers / context

// styles
import css from "./ButtonIndustry.module.css";

// utility
import React from "react";

// #endregion ===========================

const MotionImage = motion.create(Image);

export default function ButtonIndustry({ icon, children, isHoveredCard }) {
	const [isHoveredBtn, setIsHoveredBtn] = React.useState(false);

	const lineTopRef = React.useRef(null);
	const lineBottomRef = React.useRef(null);
	useHoverSplitParentExternal(isHoveredCard, lineTopRef, lineBottomRef);

	return (
		<span
			className={css.container}
			onMouseEnter={() => setIsHoveredBtn(true)}
			onFocus={() => setIsHoveredBtn(true)}
			onMouseLeave={() => setIsHoveredBtn(false)}
			onBlur={() => setIsHoveredBtn(false)}
		>
			{/* bg */}
			<motion.div
				className={css.bg}
				{...anim(variantsBg, isHoveredCard)}
			/>

			{/* icon */}
			<span className={css.container_icon}>
				<span className={css.stage}>
					<MotionImage
						src={icon}
						alt=""
						className={css.img_1}
						{...anim(variantsIcon, isHoveredBtn)}
					/>
					<MotionImage
						src={icon}
						alt=""
						className={css.img_2}
						{...anim(variantsIcon, isHoveredBtn)}
					/>
				</span>
			</span>

			{/* text */}
			<span className={css.container_text}>
				<motion.p
					className={`f_body_3 ${css.text}`}
					{...anim(variantsText, isHoveredCard)}
				>
					<span ref={lineTopRef} className={css.line_top}>
						{children}
					</span>
					<span ref={lineBottomRef} className={css.line_bottom}>
						{children}
					</span>
				</motion.p>
			</span>
		</span>
	);
}

const variantsBg = {
	initial: {
		clipPath: "inset(0% 100% 0% 0%)",
	},
	animate: {
		hover: { clipPath: "inset(0% 0% 0% 0%)" },
		blur: { clipPath: "inset(0% 100% 0% 0%)" },
	},
	transition: {
		duration: 0.4,
		ease: cubicBezier(0.5, 0, 0, 1),
	},
};

const variantsText = {
	initial: {
		color: "var(--color-text-dark)",
	},
	animate: {
		hover: {
			color: "var(--color-text-light)",
			transition: {
				delay: 0.1,
				duration: 0.05,
			},
		},
		blur: {
			color: "var(--color-text-dark)",
			transition: {
				delay: 0.1,
				duration: 0.05,
			},
		},
	},
};

const variantsIcon = {
	initial: {
		x: 0,
	},
	animate: {
		hover: { x: "200%" },
		blur: { x: 0 },
	},
	transition: {
		duration: 0.5,
		ease: cubicBezier(0.25, 0, 0, 1),
	},
};

function anim(obj, state) {
	return {
		variants: obj,
		initial: obj.initial,
		animate: state ? obj.animate.hover : obj.animate.blur,
		transition: obj.transition,
	};
}
