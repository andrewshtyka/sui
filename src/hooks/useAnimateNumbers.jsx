"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { animate } from "motion/react";

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

export default function useAnimateNumbers(
	ref,
	numFrom = 0,
	numTo = 100,
	duration = 1,
	startAnimation = false
) {
	React.useEffect(() => {
		const node = ref.current;
		if (!node) return;
		if (!startAnimation) return;

		const controls = animate(numFrom, numTo, {
			duration: duration,
			onUpdate(value) {
				node.textContent = value.toFixed() + "%";
			},
		});

		return () => controls.stop();
	}, [ref, numFrom, numTo, duration, startAnimation]);
}
