"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion } from "motion/react";

// assets

// components
import Image from "next/image";

// constants

// data

// hooks

// providers / context

// styles
import css from "./IconLink.module.css";

// utility
import React from "react";

// #endregion ===========================

const MotionImage = motion.create(Image);

export default function IconLink({ src, alt }) {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<motion.a
			href="#"
			className={css.container_icon}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onFocus={() => setIsHovered(true)}
			onBlur={() => setIsHovered(false)}
			{...anim(variantsBg, isHovered)}
		>
			<MotionImage
				src={src}
				alt={alt}
				className={css.icon}
				{...anim(variantsIcon, isHovered)}
			/>
		</motion.a>
	);
}

const variantsBg = {
	initial: {
		backgroundColor: "var(--color-gray-900)",
	},
	animate: (state) => ({
		backgroundColor: state
			? "var(--color-bg-accent)"
			: "var(--color-gray-900)",
	}),
	transition: {
		duration: 0.1,
	},
};

const variantsIcon = {
	initial: {
		filter: "initial",
	},
	animate: (state) => ({
		filter: state ? "invert()" : "initial",
	}),
};

function anim(obj, state) {
	return {
		variants: obj,
		initial: obj.initial,
		animate: obj.animate(state),
		transition: obj.transition,
	};
}
