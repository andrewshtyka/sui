"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import {
	motion,
	useMotionValueEvent,
	useScroll,
	cubicBezier,
} from "motion/react";

// assets

// components

// constants

// data

// hooks

// providers / context

// styles
import Image from "next/image";
import css from "./Card.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Card({
	num,
	title,
	logoSrc,
	logoAlt,
	company,
	videoSrc,
	videoPoster,
	isOdd,
}) {
	const [isOpened, setIsOpened] = React.useState(false);
	const ref = React.useRef(null);
	const progressRef = React.useRef(0);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start 60%", "start 60%"],
	});

	useMotionValueEvent(scrollYProgress, "change", (latest) => {
		progressRef.current = latest;

		if (progressRef.current === 1) {
			setIsOpened(true);
		} else if (progressRef.current === 0) {
			setIsOpened(false);
		}
	});

	const gridColumnClass = isOdd ? `${css.is_odd}` : `${css.is_even}`;

	return (
		<li
			ref={ref}
			className={`${css.container} ${gridColumnClass}`}
			style={{ gridRow: `${num} / ${num + 1}` }}
		>
			{/* top */}
			<div className={css.top}>
				<div className={`f_mono_title ${css.container_box}`}>
					0{num}
				</div>
				<h3 className={`f_mono_title f_uppercase`}>{title}</h3>
				<div className={css.invisible_box} />
			</div>

			{/* mid */}
			<motion.div
				className={css.mid}
				initial={{ clipPath: "var(--clip-path-closed)" }}
				animate={{
					clipPath: isOpened
						? "var(--clip-path-opened)"
						: "var(--clip-path-closed)",
				}}
				transition={transition}
			>
				<div className={css.line_container_mid} />

				<motion.video
					src={videoSrc}
					poster={videoPoster}
					loop
					playsInline
					autoPlay
					muted
					className={css.video}
					initial={{ scale: 1 }}
					animate={{
						scale: isOpened ? 1 : "var(--video-scale-hidden)",
					}}
					transition={transition}
				/>
			</motion.div>

			{/* bottom */}
			<motion.div
				className={css.bottom}
				initial={{ y: "var(--toolkit-video-section-height-initial)" }}
				animate={{
					y: isOpened
						? "var(--toolkit-video-section-height)"
						: "var(--toolkit-video-section-height-initial)",
				}}
				transition={transition}
			>
				<div className={css.line_container_bottom}>
					<div className={css.line_v} />
					<div className={css.line_h} />
				</div>

				<div className={css.container_box}>
					<Image src={logoSrc} alt={logoAlt} className={css.logo} />
				</div>
				<p className={`f_body_2 ${css.company}`}>{company}</p>
				<div className={css.invisible_box} />
			</motion.div>
		</li>
	);
}

const transition = {
	duration: 0.75,
	ease: cubicBezier(0.25, 1, 0.5, 1),
};
