// "use client";

// #region ============================== Imports

// animation
import * as motion from "motion/react-client";
// import { motion } from 'motion/react'

// assets

// components
import Image from "next/image";

// constants

// data

// hooks

// providers / context

// styles
import css from "./ButtonList.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function ButtonList({ data, isHovered = false }) {
	return (
		<motion.div
			className={css.container}
			initial={{ "--isDesktop": "inset(0% 0% 100% 0%)" }}
			animate={{
				"--isDesktop": isHovered
					? "inset(0% 0% 0% 0%)"
					: "inset(0% 0% 100% 0%)",
			}}
		>
			<div className={css.container_icon}>
				<Image src={data.icon} alt="" />
			</div>
			<p className={`f_body_2 ${css.text}`}>{data.title}</p>
		</motion.div>
	);
}
