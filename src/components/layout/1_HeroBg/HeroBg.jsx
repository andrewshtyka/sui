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
import css from "./HeroBg.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function HeroBg() {
	return (
		<div className={css.container}>
			<div className={css.container_balls}>
				<div className={css.ball_blue_light}></div>
				<div className={css.ball_blue}></div>
				<div className={css.ball_black}></div>
			</div>
			<div className={css.overlay}></div>
		</div>
	);
}
