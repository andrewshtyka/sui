// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components

// constants
import { dataToolkit } from "@/data/dataToolkit";

// data

// hooks

// providers / context

// styles
import css from "./Toolkit.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Toolkit() {
	return (
		<section className={css.section}>
			<h2 className={`f_h2 f_center ${css.title}`}>{dataToolkit.title}</h2>

			<div className={css.subtitle}>
				<div className={css.box} />
				<p className={`f_body_2 f_center`}>{dataToolkit.subtitle}</p>
			</div>
		</section>
	);
}
