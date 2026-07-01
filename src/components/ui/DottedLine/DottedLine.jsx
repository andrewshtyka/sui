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
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export default function DottedLine({
	color = "var(--color-gray-800)",
	isHorizontal = true,
}) {
	return (
		<svg
			width={isHorizontal ? "100%" : "var(--space-1)"}
			height={isHorizontal ? "var(--space-1)" : "100%"}
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				stroke={color}
				strokeWidth="2"
				strokeDasharray="2, 10"
				x1={isHorizontal ? "0" : "1"}
				y1={isHorizontal ? "1" : "0"}
				x2={isHorizontal ? "100%" : "1"}
				y2={isHorizontal ? "1" : "100%"}
			></line>
		</svg>
	);
}
