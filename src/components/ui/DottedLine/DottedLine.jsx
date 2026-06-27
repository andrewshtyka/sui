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

export default function DottedLine({ color = "var(--color-gray-800)" }) {
	return (
		<svg
			width="100%"
			height="var(--space-1)"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
		>
			<line
				stroke={color}
				strokeWidth="2"
				strokeDasharray="2, 10"
				x1="0"
				y1="1"
				x2="100%"
				y2="1"
			></line>
		</svg>
	);
}
