"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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
import React from "react";

// #endregion ===========================

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function useRevealFooter(ref, isVisible, delay = 0) {
	useGSAP(
		() => {
			const element = ref.current;
			if (!element) return;

			const arr = element.querySelectorAll(".char");
			gsap.set(arr, { autoAlpha: 0 });

			if (isVisible) {
				gsap.fromTo(
					arr,
					{
						autoAlpha: 0,
					},
					{
						delay: delay * 0.05,
						autoAlpha: 1,
						duration: 1,
						stagger: 0.075,
						ease: "steps(1)",
					}
				);
			}
		},
		{ scope: ref, dependencies: [isVisible] }
	);
}
