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

const timelineInnerHeight = 300;

export default function Toolkit() {
	const timelineRef = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: timelineRef,
		offset: ["start 35%", "end 61%"],
	});

	const [containerHeight, setContainerHeight] = React.useState(0);
	const containerRef = React.useRef(null);
	React.useEffect(() => {
		if (!containerRef.current) return;
		setContainerHeight(containerRef.current.getBoundingClientRect().height);

		function getNextHeight() {
			setContainerHeight(
				containerRef.current.getBoundingClientRect().height
			);
		}
		window.addEventListener("resize", getNextHeight);
		return () => window.removeEventListener("resize", getNextHeight);
	}, []);

	// const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
	// const timelineClipPath = useTransform(progress, (t) => {
	// 	const top = `calc(${t * containerHeight}px - var(--timeline-inner-height) * ${t})`;
	// 	const bottom = `calc(${(1 - t) * containerHeight}px - var(--timeline-inner-height) * ${1 - t})`;
	// 	return `inset(${top} 0% ${bottom} 0%)`;
	// });

	const timelineClipPath = useTransform(
		scrollYProgress,
		[0, 1],
		[
			`inset(0px 0% ${containerHeight - containerHeight / 12}px 0px)`,
			`inset(${containerHeight - containerHeight / 12}px 0px 0px 0px)`,
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
								"--timeline-inner-height": `${containerHeight / 12}px`,
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
