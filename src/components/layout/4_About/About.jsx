// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import ItemTextLottie from "./ItemTextLottie/ItemTextLottie";

// constants

// data
import { dataAbout } from "@/data/dataAbout";

// hooks

// providers / context

// styles
import css from "./About.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function About() {
	return (
		<section className={css.section}>
			<h2 className={`f_mono_body ${css.title} ${css.top}`}>
				{dataAbout.top.title}
			</h2>

			<p className={`f_h3 ${css.paragraph}`}>
				{dataAbout.top.content.map(
					({ id, text, animationData, endPoint }) => {
						if (animationData) {
							return (
								<ItemTextLottie
									key={id}
									text={text}
									animationData={animationData}
									endPoint={endPoint}
								/>
							);
						}

						return (
							<span key={id} className={css.line}>
								{text}
							</span>
						);
					}
				)}
			</p>

			<div className={css.grid}>
				<span className={`f_mono_body ${css.arrow} ${css.gc_1}`}>
					{dataAbout.bottom.decorative}
				</span>
				<h3 className={`f_mono_body ${css.title} ${css.gc_2}`}>
					{dataAbout.bottom.title}
				</h3>
			</div>
		</section>
	);
}
