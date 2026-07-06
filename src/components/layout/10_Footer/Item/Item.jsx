"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion } from "motion/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";

// assets

// components
import Link from "next/link";
import Bullet from "@/components/ui/Bullet/Bullet";

// constants

// data

// hooks

// providers / context

// styles
import css from "./Item.module.css";

// utility
import React from "react";
import getHalfAndShuffledArray from "@/utils/getHalfAndShuffledArray";
import getArrOfShuffledChars from "@/utils/getArrOfShuffledChars";

// #endregion ===========================

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrambleTextPlugin);

export default function Item({ children }) {
	const linkRef = React.useRef(null);
	const [isHovered, setIsHovered] = React.useState(false);

	const textRef = React.useRef(null);
	useGSAP(
		() => {
			const linkNode = linkRef.current;
			const textNode = textRef.current;
			if (!linkNode || !textNode) return;

			// split text
			const splitText = SplitText.create(textNode, {
				type: "chars",
				charsClass: "char++",
			});

			// get nodes to be scrambled (selectedCharsArr), and nodes to only change color (restCharsArr)
			const { shuffledArrHalf } = getHalfAndShuffledArray(
				splitText.chars.length
			);
			const allCharsArr = textNode.querySelectorAll(".char");
			const { selectedCharsArr, restCharsArr } = getArrOfShuffledChars(
				allCharsArr,
				shuffledArrHalf
			);

			let isLeaveRequested = false;

			const leaveTl = gsap.timeline({ paused: true });
			const enterTl = gsap.timeline({
				paused: true,
				onComplete: () => {
					if (isLeaveRequested) {
						isLeaveRequested = false;
						leaveTl.restart();
					}
				},
			});

			enterTl
				.to(restCharsArr, {
					color: "#000000",
				})
				.fromTo(
					selectedCharsArr,
					{
						color: "#2986ff",
					},
					{
						delay: 0.2,
						color: "#000000",
						opacity: 1,
						duration: 0.8,
						ease: "steps(2)",
						immediateRender: false,
					},
					0
				)
				.to(
					selectedCharsArr,
					{
						duration: 1,
						stagger: 0.05,
						scrambleText: {
							text: "{original}",
							chars: "abcdefg12345*&^%$",
							speed: 0.5,
							ease: "power1.inOut",
						},
						immediateRender: false,
					},
					0
				);

			leaveTl.to([selectedCharsArr, restCharsArr], {
				color: "#6c7684",
				duration: 0.2,
				ease: "power1.inOut",
			});

			const handleEnter = () => {
				isLeaveRequested = false;

				// if leaveTl is playing - stop it and play handleEnter again
				leaveTl.pause(0);

				enterTl.timeScale(1);
				enterTl.restart();
			};

			const handleLeave = () => {
				if (enterTl.isActive()) {
					// if enterTl not ended yet:
					// 1. ask leaveTl to start later
					isLeaveRequested = true;
					// 2. speed up enterTl
					enterTl.timeScale(6);
				} else {
					leaveTl.restart();
				}
			};

			linkNode.addEventListener("mouseenter", handleEnter);
			linkNode.addEventListener("focus", handleEnter);
			linkNode.addEventListener("mouseleave", handleLeave);
			linkNode.addEventListener("blur", handleLeave);

			return () => {
				linkNode.removeEventListener("mouseenter", handleEnter);
				linkNode.removeEventListener("focus", handleEnter);
				linkNode.removeEventListener("mouseleave", handleLeave);
				linkNode.removeEventListener("blur", handleLeave);
			};
		},
		{ scope: textRef }
	);

	return (
		<li className={css.container}>
			<Link
				ref={linkRef}
				href="#"
				className={css.content}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onFocus={() => setIsHovered(true)}
				onBlur={() => setIsHovered(false)}
			>
				<Bullet
					color="var(--color-gray-800)"
					colorHover="var(--color-bg-accent)"
					strokeSize={0.75}
					height={0.6}
					isHovered={isHovered}
				/>
				<span ref={textRef} className={`f_mono_body ${css.text}`}>
					{children}
				</span>
			</Link>
		</li>
	);
}
