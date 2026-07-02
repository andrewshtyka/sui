"use client";

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
import Timeline from "./Timeline/Timeline";

// #endregion ===========================

export default function Toolkit() {
	const containerRef = React.useRef(null);

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

				{/* timeline */}
				<Timeline containerRef={containerRef} />
			</div>
		</section>
	);
}
