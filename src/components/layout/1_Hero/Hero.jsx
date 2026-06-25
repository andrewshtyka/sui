"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components

// constants

// data
import { dataHero } from "@/data/1_hero";

// hooks

// providers / context

// styles
import css from "./Hero.module.css";

// utility
import React from "react";
import ButtonPrimary from "@/components/ui/ButtonPrimary/ButtonPrimary";
import Blur from "./Blur/Blur";

// #endregion ===========================

export default function Hero() {
	const [isHovered, setIsHovered] = React.useState(false);

	return (
		<section className={css.section}>
			<Blur isHovered={isHovered} />

			<h1
				className={`f_h1 ${css.title}`}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				{dataHero.title}
			</h1>

			<div className={css.bottom}>
				<p className={`f_body_1 ${css.subtitle}`}>
					{dataHero.subtitle}
				</p>

				<div className={css.container_buttons}>
					<ButtonPrimary color="dark">
						{dataHero.btn.dark}
					</ButtonPrimary>
					<ButtonPrimary color="light">
						{dataHero.btn.light}
					</ButtonPrimary>
				</div>
			</div>
		</section>
	);
}
