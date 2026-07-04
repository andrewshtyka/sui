// 'use client';

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
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

/**
 * @param containerRef - parent with position relative and overflow hidden
 * @param lineTopRef - element with initial text
 * @param lineBottomRef - element with text below (moves on top when containerRef is hovered)
 */

export default function useHoverSplitButton(
	containerRef,
	lineTopRef,
	lineBottomRef
) {
	useGSAP(() => {
		if (!containerRef || !lineTopRef || !lineBottomRef) return;

		const container = containerRef.current;
		const textTop = lineTopRef.current;
		const textBottom = lineBottomRef.current;

		if (!container || !textTop || !textBottom) return;

		// split text
		const splitTop = SplitText.create(textTop, {
			type: "chars",
		});
		const splitBottom = SplitText.create(textBottom, {
			type: "chars",
		});

		// config
		const animConfig = {
			duration: 0.2,
			stagger: 0.01,
			ease: "power1.inOut",
			overwrite: true,
		};

		// handlers
		const handleEnter = () => {
			gsap.to(splitTop.chars, { ...animConfig, yPercent: -100 });
			gsap.to(splitBottom.chars, { ...animConfig, yPercent: -100 });
		};
		const handleLeave = () => {
			gsap.to(splitTop.chars, { ...animConfig, yPercent: 0 });
			gsap.to(splitBottom.chars, { ...animConfig, yPercent: 0 });
		};

		// listeners
		container.addEventListener("mouseenter", handleEnter);
		container.addEventListener("focus", handleEnter);
		container.addEventListener("mouseleave", handleLeave);
		container.addEventListener("blur", handleLeave);

		// cleanup
		return () => {
			container.removeEventListener("mouseenter", handleEnter);
			container.removeEventListener("focus", handleEnter);
			container.removeEventListener("mouseleave", handleLeave);
			container.removeEventListener("blur", handleLeave);
		};
	});
}
