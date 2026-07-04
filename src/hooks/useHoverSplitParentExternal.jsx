// 'use client';

// #region ============================== Imports
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import React from "react";
// #endregion ===========================

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);

/**
 * @param isHovered - boolean, plays and reverses
 * @param lineTopRef - element with initial text
 * @param lineBottomRef - element with text below (moves on top when hovered)
 */

export default function useHoverSplitParentExternal(
	isHovered,
	lineTopRef,
	lineBottomRef
) {
	const splitRefs = React.useRef({ top: null, bottom: null });

	// split text
	useGSAP(() => {
		const textTop = lineTopRef.current;
		const textBottom = lineBottomRef.current;

		if (!textTop || !textBottom) return;

		splitRefs.current.top = SplitText.create(textTop, { type: "chars" });
		splitRefs.current.bottom = SplitText.create(textBottom, {
			type: "chars",
		});

		return () => {
			splitRefs.current.top?.revert();
			splitRefs.current.bottom?.revert();
		};
	}, []);

	// animate when isHovered changes
	useGSAP(
		() => {
			const splitTop = splitRefs.current.top;
			const splitBottom = splitRefs.current.bottom;

			if (!splitTop || !splitBottom) return;

			const animConfig = {
				duration: 0.2,
				stagger: 0.01,
				ease: "power2.inOut",
			};

			if (isHovered) {
				gsap.to(splitTop.chars, { ...animConfig, yPercent: -100 });
				gsap.to(splitBottom.chars, { ...animConfig, yPercent: -100 });
			} else {
				gsap.to(splitTop.chars, { ...animConfig, yPercent: 0 });
				gsap.to(splitBottom.chars, { ...animConfig, yPercent: 0 });
			}
		},
		{ dependencies: [isHovered] }
	);
}
