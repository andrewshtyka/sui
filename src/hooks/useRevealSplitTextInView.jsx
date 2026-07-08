"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// assets

// components

// constants

// data

// hooks

// providers / context
import { PreloaderContext } from "@/providers/PreloaderProvider";

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function useRevealSplitTextInView(ref, delay = 0) {
	const { isVisiblePreloader } = React.useContext(PreloaderContext);

	useGSAP(
		() => {
			const element = ref.current;
			if (!element) return;

			const split = SplitText.create(element, {
				type: "lines",
				mask: "lines",
			});

			if (!isVisiblePreloader) {
				gsap.fromTo(
					split.lines,
					{
						y: "100%",
						autoAlpha: 0,
					},
					{
						y: "0%",
						delay: delay,
						scrollTrigger: {
							trigger: element,
							start: "bottom 95%",
						},
						duration: 1.5,
						autoAlpha: 1,
						stagger: 0.1,
						ease: "power3.out",
					}
				);
			}
		},
		{ dependencies: [isVisiblePreloader] }
	);
}
