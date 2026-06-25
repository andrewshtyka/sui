// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components

// constants

// data

// hooks

// providers / context

// styles
import css from "./ButtonPrimary.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function ButtonPrimary({
	children,
	tag: Tag = "button",
	color = "accent",
}) {
	const attributes =
		Tag === "button"
			? { type: "button" }
			: { target: "_blank", rel: "noopener noreferrer" };

	let backgroundColor;
	let textColor;
	if (color === "accent") {
		backgroundColor = "var(--color-button-accent)";
		textColor = "var(--color-text-light)";
	} else if (color === "light") {
		backgroundColor = "var(--color-button-light)";
		textColor = "var(--color-text-dark)";
	} else if (color === "dark") {
		backgroundColor = "var(--color-button-dark)";
		textColor = "var(--color-text-light)";
	}

	return (
		<Tag
			{...attributes}
			className={`f_body_3 ${css.button}`}
			style={{ backgroundColor, color: textColor }}
		>
			<span className={css.content}>{children}</span>
		</Tag>
	);
}
