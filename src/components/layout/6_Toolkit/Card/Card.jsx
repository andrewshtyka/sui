// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

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
	const gridColumnClass = isOdd ? `${css.is_odd}` : `${css.is_even}`;

	return (
		<li
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

			{/* video */}
			<div className={css.mid}>
				<video
					src={videoSrc}
					poster={videoPoster}
					loop
					playsInline
					autoPlay
					muted
					className={css.video}
				/>
			</div>

			{/* bottom */}
			<div className={css.bottom}>
				<div className={css.container_box}>
					<Image src={logoSrc} alt={logoAlt} className={css.logo} />
				</div>
				<p className={`f_body_2 ${css.company}`}>{company}</p>
				<div className={css.invisible_box} />
			</div>

			{/* side line */}
			<div className={css.side_line}>
				<div className={css.line_vertical} />
				<div className={css.line_horizontal} />
			</div>
		</li>
	);
}
