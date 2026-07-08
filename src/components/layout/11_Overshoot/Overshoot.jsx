"use client";

// #region ============================== Import

// animation
// import * as motion from 'motion/react-client'
import { motion, useMotionValue, animate, useTransform } from "motion/react";

// components
import DottedLine from "@/components/ui/DottedLine/DottedLine";

// hooks
import {
	useGetViewportHeight,
	useGetPageHeight,
} from "@/hooks/useGetPageSizes";
import { useLenis } from "lenis/react";

// providers / context
// import { LenisContext } from "@/providers/LenisProvider";

// styles
import css from "./Overshoot.module.css";

// utility
import React from "react";

// #endregion ===========================

const IDLE_DELAY = 1000;

export default function Overshoot() {
	const lenis = useLenis();
	const { viewportHeight } = useGetViewportHeight();
	const { pageHeight } = useGetPageHeight();

	const overShootHeight = viewportHeight * 0.4;
	const pageHeightWithoutOvershoot = pageHeight - overShootHeight;
	const scrollToPosition = pageHeightWithoutOvershoot - viewportHeight;

	const timeStart = React.useRef(0);
	const isRunning = React.useRef(false);
	const rafId = React.useRef(null);

	// overshoot logic
	React.useEffect(() => {
		if (!lenis) return;

		// scroll up, when overshoot is in the viewport
		function performScroll(time) {
			if (!isRunning.current) return;

			if (time - timeStart.current >= IDLE_DELAY) {
				lenis.scrollTo(scrollToPosition, {
					lock: true,
				});
				timeStart.current = time;
			}
			rafId.current = requestAnimationFrame(performScroll);
		}

		// observe border, and fire raF when it's crossed
		function observeScroll(e) {
			const currentScroll = e.scroll + viewportHeight;

			if (currentScroll >= pageHeightWithoutOvershoot) {
				if (!isRunning.current) {
					isRunning.current = true;
					// timeStart.current = performance.now();
					timeStart.current = lenis.time;

					rafId.current = requestAnimationFrame(performScroll);
				}
			} else {
				isRunning.current = false;
				if (rafId.current) {
					cancelAnimationFrame(rafId.current);
					rafId.current = null;
				}
			}
		}

		lenis.on("scroll", observeScroll);
		return () => {
			lenis.off("scroll", observeScroll);
		};
	}, [lenis, pageHeightWithoutOvershoot, viewportHeight, scrollToPosition]);

	return (
		<div className={css.container}>
			<div className={`${css.bar} ${css.bar_1}`}></div>

			<div className={`${css.bar} ${css.bar_2}`}>
				<DottedLine
					isHorizontal={false}
					color="var(--color-bg-light)"
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
		</div>
	);
}
