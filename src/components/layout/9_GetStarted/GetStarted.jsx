// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import ListItem from "./ListItem/ListItem";

// constants

// data
import { dataGetStarted } from "@/data/dataGetStarted";

// hooks

// providers / context

// styles
import css from "./GetStarted.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function GetStarted() {
	return (
		<section className={css.section}>
			<h2 className={`f_h2 f_center ${css.title}`}>
				{dataGetStarted.title}
			</h2>

			<ul className={css.list}>
				{dataGetStarted.items.map(
					({ id, title, text, button, lottie }) => (
						<ListItem
							key={id}
							title={title}
							text={text}
							button={button}
							lottie={lottie}
						/>
					)
				)}
			</ul>
		</section>
	);
}
