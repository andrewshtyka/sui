"use client";

// #region ============================== Import

// animation
// import * as motion from 'motion/react-client'
import { motion, useMotionValue, animate, useTransform } from "motion/react";

// components
import DottedLine from "@/components/ui/DottedLine/DottedLine";

// providers / context

// styles
import css from "./Overshoot.module.css";

// utility
import React from "react";
import { onLenisReady } from "@/lib/lenis";

// #endregion ===========================

export default function Overshoot() {
	React.useEffect(() => {
		let lenisInstance = null;
		let handleScroll;

		const unsubscribe = onLenisReady((lenis) => {
			lenisInstance = lenis;
			handleScroll = (e) => {
				console.log(e.velocity); // scroll, progress, velocity
			};
			lenis.on("scroll", handleScroll);
		});

		return () => {
			unsubscribe();
			if (lenisInstance && handleScroll) {
				lenisInstance.off("scroll", handleScroll);
			}
		};
	}, []);

	return (
		<motion.div
			className={css.container}
			style={
				{
					// change height
				}
			}
		>
			<motion.div
				className={css.content}
				style={
					{
						// change clipPath "bottom"
						// change "y" position
					}
				}
			>
				<div className={`${css.bar} ${css.bar_1}`}></div>

				<div className={`${css.bar} ${css.bar_2}`}>
					<DottedLine
						isHorizontal={false}
						color="var(--color-bg-light)"
						size="400px"
					/>
				</div>

				<div className={`${css.bar} ${css.bar_3}`}>
					<DottedLine
						isHorizontal={false}
						color="var(--color-bg-light)"
					/>
				</div>

				<div className={`${css.bar} ${css.bar_4}`}>
					<DottedLine
						isHorizontal={false}
						color="var(--color-bg-light)"
					/>
					<DottedLine
						isHorizontal={false}
						color="var(--color-bg-light)"
					/>
				</div>

				<div className={`${css.bar} ${css.bar_5}`}>
					<DottedLine
						isHorizontal={false}
						color="var(--color-bg-light)"
					/>
				</div>

				<div className={`${css.bar} ${css.bar_6}`}>
					<DottedLine
						isHorizontal={false}
						color="var(--color-bg-light)"
					/>
				</div>

				<div className={`${css.bar} ${css.bar_7}`} />
			</motion.div>
		</motion.div>
	);
}
