// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from "motion/react";

// assets

// components
import ButtonPrimary from "@/components/ui/ButtonPrimary/ButtonPrimary";
import Blur from "./Blur/Blur";
import Title from "./Title/Title";

// constants

// data
import { dataHero } from "@/data/dataHero";

// hooks

// providers / context

// styles
import css from "./Hero.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Hero() {
	return (
		<section className={css.section}>
			<Title>{dataHero.title}</Title>
			<Blur />

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
