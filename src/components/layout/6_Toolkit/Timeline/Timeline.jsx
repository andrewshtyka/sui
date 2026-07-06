// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
} from "motion/react";

// assets

// components
import DottedLine from "@/components/ui/DottedLine/DottedLine";

// constants

// data

// hooks

// providers / context

// styles
import css from "./Timeline.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Timeline({ containerRef }) {
	// get container height
	const [containerHeight, setContainerHeight] = React.useState(0);
	React.useEffect(() => {
		if (!containerRef.current) return;

		function getNextHeight() {
			setContainerHeight(
				containerRef.current.getBoundingClientRect().height
			);
		}

		getNextHeight();
		window.addEventListener("resize", getNextHeight);
		return () => window.removeEventListener("resize", getNextHeight);
	}, []);

	// get viewport height
	const [viewportHeight, setViewportHeight] = React.useState(0);
	React.useEffect(() => {
		function updateVH() {
			setViewportHeight(window.innerHeight);
		}
		updateVH();
		window.addEventListener("resize", updateVH);
		return () => window.removeEventListener("resize", updateVH);
	}, []);

	// count offset (to make 'clipPath' for timeline_main match 'top' for inner container_inner)
	const isSmallHeight = viewportHeight / 2 < 300;
	const innerHeightTimelinePx = isSmallHeight
		? viewportHeight / 2
		: viewportHeight / 3;
	const startPercent = isSmallHeight ? 25 : 35;
	const endPercent =
		viewportHeight > 0
			? startPercent + (innerHeightTimelinePx / viewportHeight) * 100
			: startPercent;

	const timelineRef = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: timelineRef,
		offset: [`start ${startPercent}%`, `end ${endPercent}%`],
	});
	const timelineClipPath = useTransform(
		scrollYProgress,
		[0, 1],
		[
			`inset(0px 0% ${containerHeight - innerHeightTimelinePx}px 0px)`,
			`inset(${containerHeight - innerHeightTimelinePx}px 0px 0px 0px)`,
		]
	);

	// path animation (depends on scroll power)
	const pathScrollVelocity = useVelocity(scrollYProgress);
	const pathRawHeightTop = useTransform(
		pathScrollVelocity,
		[0, 1],
		[0, innerHeightTimelinePx / 2],
		{ clamp: true }
	);
	const pathRawHeightBottom = useTransform(
		pathScrollVelocity,
		[-1, 0],
		[innerHeightTimelinePx / 2, 0],
		{ clamp: true }
	);
	const pathHeightTop = useSpring(pathRawHeightTop, {
		stiffness: 300,
		damping: 30,
	});
	const pathHeightBottom = useSpring(pathRawHeightBottom, {
		stiffness: 300,
		damping: 30,
	});
	const boxPositionRaw = useTransform(
		pathScrollVelocity,
		[-1, 0, 1],
		[innerHeightTimelinePx / -4, 0, innerHeightTimelinePx / 4]
	);
	const boxPosition = useSpring(boxPositionRaw, {
		stiffness: 300,
		damping: 30,
	});

	return (
		<div className={css.container_timeline}>
			{/* visible part */}
			<div
				className={css.timeline_current}
				style={{ height: containerHeight }}
			>
				<motion.div
					className={css.container_inner}
					layout={true}
					style={{
						"--timeline-inner-height": `${innerHeightTimelinePx}px`,
						"--timeline-offset-top": `${startPercent}%`,
					}}
				>
					{/* path */}
					<motion.div
						className={css.container_path}
						style={{ y: boxPosition }}
					>
						<motion.div
							className={`${css.timeline_path} ${css.top}`}
							style={{ height: pathHeightTop }}
						/>
						<motion.div
							className={`${css.timeline_path} ${css.bottom}`}
							style={{ height: pathHeightBottom }}
						/>
					</motion.div>
					<motion.div
						className={css.timeline_box}
						style={{ y: boxPosition }}
					/>
				</motion.div>
			</div>

			{/* dashed line on bg */}
			<motion.div
				ref={timelineRef}
				className={css.timeline_main}
				style={{
					clipPath: timelineClipPath,
				}}
			>
				<DottedLine isHorizontal={false} color="var(--color-light)" />
			</motion.div>
		</div>
	);
}
