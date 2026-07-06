// "use client";

// #region ============================== Imports

// animation
import * as motion from "motion/react-client";
// import { motion } from "motion/react";

// assets

// components

// constants

// data

// hooks

// providers / context

// styles
import css from "./Bullet.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Bullet({
	height = 0.75,
	width = 1,
	color = "var(--color-bg-accent)",
	colorHover = "",
	strokeSize = 1,
	isHovered = false,
}) {
	return (
		<span
			className={css.container_bullet}
			style={{
				height: `calc(var(--font-size-body-2) * ${height})`,
				width: `calc(var(--padding-body) * ${width})`,
			}}
		>
			<motion.span
				className={css.vertical}
				style={{
					width: `calc(var(--space-1) * ${strokeSize})`,
				}}
				{...anim(variantsBar, isHovered, color, colorHover)}
			/>
			<motion.span
				className={css.horizontal}
				style={{
					height: `calc(var(--space-1) * ${strokeSize})`,
				}}
				{...anim(variantsBar, isHovered, color, colorHover)}
			/>
		</span>
	);
}

const variantsBar = {
	initial: (color) => ({
		backgroundColor: color,
	}),
	animate: (state, color, colorFinal) => ({
		backgroundColor: state ? colorFinal : color,
	}),
	transition: (state) => ({
		duration: state ? 0.2 : 0.4,
		ease: "easeInOut",
	}),
};

function anim(obj, state, color, colorFinal) {
	return {
		variants: obj,
		initial: obj.initial(color),
		animate: obj.animate(state, color, colorFinal),
		transition: obj.transition(state),
	};
}
