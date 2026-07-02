// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Card from "./Card/Card";

// constants

// data
import { dataIndustries } from "@/data/dataIndustries";

// hooks

// providers / context

// styles
import css from "./Industries.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Industries() {
	return (
		<section className={css.section}>
			<h2 className={`f_h2 f_center ${css.title}`}>
				{dataIndustries.title}
			</h2>

			<div className={css.subtitle}>
				<div className={css.box} />
				<p className={`f_body_2 f_center`}>{dataIndustries.subtitle}</p>
			</div>

			<ul className={css.grid}>
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
