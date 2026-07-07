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

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function useRevealTitleInView(ref, delay = 0) {
	useGSAP(() => {
		const element = ref.current;
		if (!element) return;

		const split = SplitText.create(element, {
			type: "words",
		});

		gsap.fromTo(
			split.words,
			{
				y: "40%",
				autoAlpha: 0,
			},
			{
				y: "0%",
				delay: delay,
				scrollTrigger: {
					trigger: element,
					start: "bottom 90%",
				},
				duration: 0.75,
				autoAlpha: 1,
				stagger: 0.075,
				ease: "power2.out",
			}
		);
	});
}
