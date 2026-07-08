"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// assets

// components

// constants

// data

// hooks

// providers / context

// styles
// import css from '.'

// utility
import Lenis from "lenis";
import React from "react";

// #endregion ===========================

gsap.registerPlugin(ScrollTrigger);

export const LenisContext = React.createContext({ lenis: null });

export default function LenisProvider({ children }) {
	const [lenis] = React.useState(() =>
		typeof window !== "undefined" ? new Lenis() : null
	);

	React.useEffect(() => {
		if (!lenis) return;

		// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
		lenis.on("scroll", ScrollTrigger.update);

		// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
		// This ensures Lenis's smooth scroll animation updates on each GSAP tick
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000); // Convert time from seconds to milliseconds
		});

		// Disable lag smoothing in GSAP to prevent any delay in scroll animations
		gsap.ticker.lagSmoothing(0);

		return () => {
			lenis.destroy();
		};
	}, [lenis]);

	return (
		<LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
	);
}
