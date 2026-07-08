"use client";

// #region ============================== Import

// animation
// import * as motion from 'motion/react-client'
import {
	motion,
	useMotionValue,
	animate,
	useTransform,
	useScroll,
} from "motion/react";

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
const lineColor = "var(--color-bg-dark)";
const lineSize = "200%";

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
					lerp: 0.15,
				});
				timeStart.current = time;
			}
			rafId.current = requestAnimationFrame(performScroll);
		}

		// observe boundary, and fire raF when boundary is crossed
		function observeBoundary(e) {
			const currentScroll = e.scroll + viewportHeight;

			if (currentScroll >= pageHeightWithoutOvershoot) {
				if (!isRunning.current) {
					isRunning.current = true;
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

		lenis.on("scroll", observeBoundary);
		return () => {
			lenis.off("scroll", observeBoundary);
		};
	}, [lenis, pageHeightWithoutOvershoot, viewportHeight, scrollToPosition]);

	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end end"],
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

	return (
		<div ref={ref} className={css.container}>
			<div className={css.content}>
				<div className={`${css.bar} ${css.bar_1}`}></div>
				<div className={`${css.bar} ${css.bar_2}`}>
					<motion.span className={css.container_line} style={{ y }}>
						<DottedLine
							isHorizontal={false}
							color={lineColor}
							size={lineSize}
						/>
					</motion.span>
				</div>
				<div className={`${css.bar} ${css.bar_3}`}>
					<motion.span className={css.container_line} style={{ y }}>
						<DottedLine
							isHorizontal={false}
							color={lineColor}
							size={lineSize}
						/>
					</motion.span>
				</div>
				<div className={`${css.bar} ${css.bar_4}`}>
					<motion.span className={css.container_line} style={{ y }}>
						<DottedLine
							isHorizontal={false}
							color={lineColor}
							size={lineSize}
						/>
					</motion.span>
					<motion.span className={css.container_line} style={{ y }}>
						<DottedLine
							isHorizontal={false}
							color={lineColor}
							size={lineSize}
						/>
					</motion.span>
				</div>
				<div className={`${css.bar} ${css.bar_5}`}>
					<motion.span className={css.container_line} style={{ y }}>
						<DottedLine
							isHorizontal={false}
							color={lineColor}
							size={lineSize}
						/>
					</motion.span>
				</div>
				<div className={`${css.bar} ${css.bar_6}`}>
					<motion.span className={css.container_line} style={{ y }}>
						<DottedLine
							isHorizontal={false}
							color={lineColor}
							size={lineSize}
						/>
					</motion.span>
				</div>
				<div className={`${css.bar} ${css.bar_7}`} />
			</div>
		</div>
	);
}
