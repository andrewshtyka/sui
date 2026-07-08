"use client";

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
import { useLenis } from "lenis/react";

// #endregion ===========================

// get viewport height
export function useGetViewportHeight() {
	const [viewportHeight, setViewportHeight] = React.useState(0);

	React.useEffect(() => {
		function handleHeight() {
			const height = window.innerHeight;
			setViewportHeight(height);
		}
		handleHeight();

		window.addEventListener("resize", handleHeight);
		return () => window.removeEventListener("resize", handleHeight);
	}, [viewportHeight]);

	return { viewportHeight };
}

// get whole page height
export function useGetPageHeight() {
	const [pageHeight, setPageHeight] = React.useState(0);
	const lenis = useLenis();

	React.useEffect(() => {
		if (!lenis) return;

		function handleHeight() {
			const height = lenis.dimensions.scrollHeight;
			setPageHeight(height);
		}
		handleHeight();

		window.addEventListener("resize", handleHeight);
		return () => window.removeEventListener("resize", handleHeight);
	}, [lenis, pageHeight]);

	return { pageHeight };
}

// get page width
export function useGetPageWidth() {
	const [pageWidth, setPageWidth] = React.useState(0);

	React.useEffect(() => {
		function handleWidth() {
			const width = window.innerWidth || 0;
			setPageWidth(width);
		}

		handleWidth();

		window.addEventListener("resize", handleWidth);
		return () => window.removeEventListener("resize", handleWidth);
	}, [pageWidth]);

	return { pageWidth };
}
