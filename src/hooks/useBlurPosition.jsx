// 'use client';

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { useSpring } from "motion/react";

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

const spring = { damping: 20, stiffness: 150, restDelta: 0.01 };

export default function useBlurPosition(isHovered = false) {
	const xNormal = useSpring(0.5, spring);
	const yNormal = useSpring(0.5, spring);

	React.useEffect(() => {
		// isHovered === false (back to center)
		if (!isHovered) {
			xNormal.set(0.5);
			yNormal.set(0.5);
			return;
		}

		// isHovered === true (follow pointer)
		const handlePointerMove = ({ clientX, clientY }) => {
			xNormal.set(clientX / window.innerWidth);
			yNormal.set(clientY / window.innerHeight);
		};

		window.addEventListener("pointermove", handlePointerMove);

		return () =>
			window.removeEventListener("pointermove", handlePointerMove);
	}, [isHovered]);

	return { xNormal, yNormal };
}
