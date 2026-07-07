"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion, useInView } from "motion/react";

// assets

// components
import Card from "./Card/Card";

// constants

// data
import { dataIndustries } from "@/data/dataIndustries";

// hooks
import useRevealTitleInView from "@/hooks/useRevealTitleInView";
import useRevealSubtitleInView from "@/hooks/useRevealSubtitleInView";

// providers / context

// styles
import css from "./Industries.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Industries() {
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
				{dataIndustries.title}
			</h2>

			<div className={css.subtitle}>
				<motion.div
					ref={boxRef}
					className={css.box}
					{...anim(variantsBox, isBoxInView)}
				/>
				<p ref={subtitleRef} className={`f_body_2 f_center`}>
					{dataIndustries.subtitle}
				</p>
			</div>

			<ul className={css.grid_cards}>
				{dataIndustries.items.map(
					({ id, title, logoTitle, logoArr, textArr, btnTitle }) => (
						<Card
							key={id}
							title={title}
							logoTitle={logoTitle}
							logoArr={logoArr}
							textArr={textArr}
							btnTitle={btnTitle}
							icon={dataIndustries.icon}
						/>
					)
				)}
			</ul>
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
