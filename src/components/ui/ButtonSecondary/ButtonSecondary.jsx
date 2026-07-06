"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from "motion/react";

// assets

// components

// constants

// data

// hooks
import useHoverSplitButton from "@/hooks/useHoverSplitButton";

// providers / context

// styles
import css from "./ButtonSecondary.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function ButtonSecondary({
	children,
	tag: Tag = "button",
	color = "accent",
}) {
	const containerRef = React.useRef(null);
	const lineTopRef = React.useRef(null);
	const lineBottomRef = React.useRef(null);
	useHoverSplitButton(containerRef, lineTopRef, lineBottomRef);

	return (
		<Tag
			ref={containerRef}
			{...getAttributes(Tag)}
			className={`f_body_3 ${css.button}`}
			style={{ ...getStyles(color) }}
		>
			<span className={css.content}>
				<span ref={lineTopRef} className={css.line_top}>
					{children}
				</span>
				<span ref={lineBottomRef} className={css.line_bottom}>
					{children}
				</span>
			</span>
		</Tag>
	);
}

function getAttributes(tag) {
	return tag === "button"
		? { type: "button" }
		: { target: "_blank", rel: "noopener noreferrer" };
}

function getStyles(color) {
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

	return {
		backgroundColor: backgroundColor,
		color: textColor,
	};
}
