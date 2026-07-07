"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion, useInView } from "motion/react";

// assets

// components
import Card from "./Card/Card";
import Timeline from "./Timeline/Timeline";

// constants
import { dataToolkit } from "@/data/dataToolkit";

// data

// hooks
import useRevealTitleInView from "@/hooks/useRevealTitleInView";
import useRevealSubtitleInView from "@/hooks/useRevealSubtitleInView";

// providers / context

// styles
import css from "./Toolkit.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Toolkit() {
	const containerRef = React.useRef(null);

	const titleRef = React.useRef(null);
	useRevealTitleInView(titleRef);

	const subtitleRef = React.useRef(null);
	useRevealSubtitleInView(subtitleRef);

	const boxRef = React.useRef(null);
	const isBoxInView = useInView(boxRef, {
		once: true,
		margin: "0% 0% -12% 0%",
	});

	return (
		<section className={css.section}>
			<h2 ref={titleRef} className={`f_h2 f_center ${css.title}`}>
				{dataToolkit.title}
			</h2>

			<div className={css.subtitle}>
				<motion.div
					ref={boxRef}
					className={css.box}
					{...anim(variantsBox, isBoxInView)}
				/>
				<p ref={subtitleRef} className={`f_body_2 f_center`}>
					{dataToolkit.subtitle}
				</p>
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

				{/* timeline */}
				<Timeline containerRef={containerRef} />
			</div>
		</section>
	);
}

const variantsBox = {
	initial: {
		opacity: 0,
	},
	animate: (state) => ({
		opacity: state ? 1 : 0,
	}),
	transition: {
		duration: 0.75,
	},
};

function anim(obj, state) {
	return {
		initial: obj.initial,
		animate: obj.animate(state),
		transition: obj.transition,
	};
}
