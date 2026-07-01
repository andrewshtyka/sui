"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion, useScroll, useTransform } from "motion/react";

// assets

// components
import Card from "./Card/Card";
import DottedLine from "@/components/ui/DottedLine/DottedLine";

// constants
import { dataToolkit } from "@/data/dataToolkit";

// data

// hooks

// providers / context

// styles
import css from "./Toolkit.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Toolkit() {
	// get container height
	const [containerHeight, setContainerHeight] = React.useState(0);
	const containerRef = React.useRef(null);
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

	return (
		<section className={css.section}>
			<h2 className={`f_h2 f_center ${css.title}`}>
				{dataToolkit.title}
			</h2>

			<div className={css.subtitle}>
				<div className={css.box} />
				<p className={`f_body_2 f_center`}>{dataToolkit.subtitle}</p>
			</div>

			{/* cards */}
			<div ref={containerRef} className={css.container_cards}>
				<ul className={css.grid}>
					{dataToolkit.items.map(({ id, title, video, logo }) => (
						<Card
							key={id}
							num={id}
							title={title}
							videoSrc={video.src}
							videoPoster={video.poster}
							logoSrc={logo.src}
							logoAlt={logo.alt}
							company={logo.alt}
							isOdd={id % 2 !== 0}
						/>
					))}
				</ul>

				{/* line mid */}
				<div className={css.container_timeline}>
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
							<div className={css.timeline_box} />
						</motion.div>
					</div>

					<motion.div
						ref={timelineRef}
						className={css.timeline_main}
						style={{
							clipPath: timelineClipPath,
						}}
					>
						<DottedLine
							isHorizontal={false}
							color="var(--color-light)"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
