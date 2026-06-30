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
	const start = useSpring(0.14, spring);
	const end_1 = useSpring(0.24, spring);
	const end_2 = useSpring(0.38, spring);

	React.useEffect(() => {
		// isHovered === false (back to center)
		if (!isHovered) {
			xNormal.set(0.5);
			yNormal.set(0.5);
			start.set(0.14);
			end_1.set(0.24);
			end_2.set(0.38);
			return;
		}

		// isHovered === true (follow pointer)
		const handlePointerMove = ({ clientX, clientY }) => {
			xNormal.set(clientX / window.innerWidth);
			yNormal.set(clientY / window.innerHeight);
			start.set(0.1);
			end_1.set(0.15);
			end_2.set(0.25);
		};

		window.addEventListener("pointermove", handlePointerMove);

		return () =>
			window.removeEventListener("pointermove", handlePointerMove);
	}, [isHovered]);

	return { xNormal, yNormal, start, end_1, end_2 };
}
