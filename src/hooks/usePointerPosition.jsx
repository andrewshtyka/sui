// 'use client';

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { frame, useMotionValue, useSpring } from "motion/react";

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

const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };

export default function usePointerPosition(isHovered = false) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	// coordinates normalized
	const xNormal = useMotionValue(0.5);
	const yNormal = useMotionValue(0.5);

	// coordinates normalized and animated
	const xNormalSpring = useSpring(0.5, spring);
	const yNormalSpring = useSpring(0.5, spring);

	const isHoveredRef = React.useRef(isHovered);

	// isHovered === false
	React.useEffect(() => {
		isHoveredRef.current = isHovered;

		if (!isHovered) {
			xNormalSpring.set(0.5);
			yNormalSpring.set(0.5);
		}
	}, [isHovered]);

	// isHovered === true
	React.useEffect(() => {
		const handlePointerMove = ({ clientX, clientY }) => {
			if (!isHoveredRef.current) return;

			x.set(clientX);
			y.set(clientY);
			xNormal.set(clientX / window.innerWidth);
			yNormal.set(clientY / window.innerHeight);
			xNormalSpring.set(clientX / window.innerWidth);
			yNormalSpring.set(clientY / window.innerHeight);
		};

		window.addEventListener("pointermove", handlePointerMove);

		return () =>
			window.removeEventListener("pointermove", handlePointerMove);
	}, []);

	return { x, y, xNormal, yNormal, xNormalSpring, yNormalSpring };
}
