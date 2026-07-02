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
import css from "./Bullet.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Bullet({ height = "calc(var(--font-size-body-2) * 0.75)" }) {
	return (
		<span className={css.container_bullet} style={{ height }}>
			<span className={css.vertical} />
			<span className={css.horizontal} />
		</span>
	);
}
