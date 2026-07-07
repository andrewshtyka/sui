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

export default function useRevealSubtitleInView(ref, delay = 0.1) {
	useGSAP(() => {
		const element = ref.current;
		if (!element) return;

		const split = SplitText.create(element, {
			type: "words, chars",
		});

		gsap.fromTo(
			split.chars,
			{
				autoAlpha: 0,
			},
			{
				autoAlpha: 1,
				delay: delay,
				scrollTrigger: {
					trigger: element,
					start: "bottom 90%",
				},
				duration: 0.75,
				stagger: 0.01,
				ease: "power3.inOut",
			}
		);
	});
}
