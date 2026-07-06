"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
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
import getHalfAndShuffledArray from "@/utils/getHalfAndShuffledArray";
import getArrOfShuffledChars from "@/utils/getArrOfShuffledChars";

// #endregion ===========================

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrambleTextPlugin);

const COLORS = {
	white: "#ffffff",
	black: "#000000",
	gray: "#6c7684",
	blue: "#2986ff",
};

export default function useHoverLinkScramble(
	containerRef,
	textRef,
	colorStart = "gray",
	colorEnd = "black",
	delay = 0.2
) {
	let hexColorStart;
	let hexColorEnd;
	for (const color in COLORS) {
		if (color === colorStart) {
			hexColorStart = COLORS[color];
		}
		if (color === colorEnd) {
			hexColorEnd = COLORS[color];
		}
	}

	useGSAP(
		() => {
			const containerNode = containerRef.current;
			const textNode = textRef.current;
			if (!containerNode || !textNode) return;

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
					onStart: () => {
						allCharsArr.forEach((el) => {
							el.style.width = `${el.getBoundingClientRect().width}px`;
						});

						selectedCharsArr.forEach((el) => {
							el.style.position = "relative";
							el.style.zIndex = 2;
						});
					},
					color: hexColorEnd,
				})
				.fromTo(
					selectedCharsArr,
					{
						color: COLORS.blue,
					},
					{
						delay: delay,
						color: hexColorEnd,
						duration: 0.8,
						immediateRender: false,
					},
					0
				)
				.to(
					selectedCharsArr,
					{
						duration: 1,
						stagger: 0.025,
						scrambleText: {
							text: "{original}",
							chars: "abcde12345*&^!$",
							speed: 1,
							ease: "power1.inOut",
						},
						immediateRender: false,
					},
					0
				);

			leaveTl.to([selectedCharsArr, restCharsArr], {
				color: hexColorStart,
				duration: 0.2,
				ease: "power1.inOut",
				onComplete: () => {
					allCharsArr.forEach((el, i) => {
						el.style.width = "auto";
					});

					selectedCharsArr.forEach((el) => {
						el.style.position = "initial";
						el.style.zIndex = "initial";
					});
				},
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

			containerNode.addEventListener("mouseenter", handleEnter);
			containerNode.addEventListener("focus", handleEnter);
			containerNode.addEventListener("mouseleave", handleLeave);
			containerNode.addEventListener("blur", handleLeave);

			return () => {
				containerNode.removeEventListener("mouseenter", handleEnter);
				containerNode.removeEventListener("focus", handleEnter);
				containerNode.removeEventListener("mouseleave", handleLeave);
				containerNode.removeEventListener("blur", handleLeave);
			};
		},
		{ scope: textRef }
	);
}
