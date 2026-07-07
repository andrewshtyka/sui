"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
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
gsap.registerPlugin(ScrambleTextPlugin);

export default function useRevealSplitTextColored(ref) {
	useGSAP(
		() => {
			const element = ref.current;
			if (!element) return;

			const split = SplitText.create(element, {
				type: "chars, words",
				mask: "chars",
				charsClass: "charAbout",
				wordsClass: "wordAbout",
			});

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: element,
					start: "bottom 90%",
				},
			});

			split.chars.forEach((char) => {
				tl.fromTo(
					char,
					{
						autoAlpha: 0,
					},
					{
						onStart: () => {
							char.style.backgroundColor = "var(--char-bg-color)";
							char.style.color = "var(--char-color)";
						},
						autoAlpha: 1,
						duration: 0.04,
						scrambleText: {
							text: "{original}",
							chars: "12345*&^!$",
							speed: 1,
							revealDelay: 0.03,
						},
						onComplete: () => {
							setTimeout(() => {
								char.style.backgroundColor = "transparent";
								char.style.color = "var(--color-bg-dark)";
							}, 40);
						},
					}
				);
			});
		},
		{ scope: ref }
	);
}
