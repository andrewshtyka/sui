"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion } from "motion/react";

// assets

// components
import Image from "next/image";
import Link from "next/link";

// constants

// data

// hooks
import useHoverLinkScramble from "@/hooks/useHoverLinkScramble";

// providers / context

// styles
import css from "./Item.module.css";

// utility
import React from "react";

// #endregion ===========================

const MotionImage = motion.create(Image);

export default function Item({ src, alt, children }) {
	const [isHovered, setIsHovered] = React.useState(false);

	const linkRef = React.useRef(null);
	const textRef = React.useRef(null);
	useHoverLinkScramble(linkRef, textRef, "white", "white", 0);

	return (
		<Link
			ref={linkRef}
			href="#"
			className={css.container}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			onFocus={() => setIsHovered(true)}
			onBlur={() => setIsHovered(false)}
		>
			<span ref={textRef} className={`f_body_3`}>
				{children}
			</span>

			<motion.span
				className={css.container_icon}
				{...anim(variantsBg, isHovered)}
			>
				<MotionImage
					src={src}
					alt={alt}
					className={css.icon}
					{...anim(variantsIcon, isHovered)}
				/>
			</motion.span>
		</Link>
	);
}

const variantsBg = {
	initial: {
		backgroundColor: "var(--color-gray-400)",
	},
	animate: (state) => ({
		backgroundColor: state
			? "var(--color-bg-accent)"
			: "var(--color-gray-400)",
	}),
	transition: {
		duration: 0.001,
	},
};

const variantsIcon = {
	initial: {
		rotate: "0deg",
	},
	animate: (state) => ({
		rotate: state ? "-135deg" : "0deg",
	}),
	transition: {
		duration: 0.2,
	},
};

function anim(obj, state) {
	return {
		variants: obj,
		initial: obj.initial,
		animate: obj.animate(state),
		transition: obj.transition,
	};
}
