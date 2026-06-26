// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components

// constants

// data
import { dataAbout } from "@/data/3_dataAbout";

// hooks

// providers / context

// styles
import css from "./About.module.css";

// utility
import React from "react";
import LottieContainer from "@/components/ui/LottieContainer/LottieContainer";
import ItemTextLottie from "./ItemTextLottie/ItemTextLottie";

// #endregion ===========================

export default function About() {
	return (
		<section className={css.section}>
			<h2 className={`f_mono_body ${css.title}`}>
				{dataAbout.top.title}
			</h2>

			<p className={`f_h3 ${css.text}`}>
				{dataAbout.top.content.map(({ id, text, animationData }) => {
					if (animationData) {
						return (
							<ItemTextLottie
								key={id}
								text={text}
								animationData={animationData}
							/>
						);
					}

					return (
						<span key={id} className={css.line}>
							{text}
						</span>
					);
				})}
			</p>
		</section>
	);
}
