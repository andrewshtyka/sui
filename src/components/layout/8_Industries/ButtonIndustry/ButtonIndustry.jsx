"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Image from "next/image";

// constants

// data

// hooks

// providers / context

// styles
import css from "./ButtonIndustry.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function ButtonIndustry({ icon, children }) {
	const lineTopRef = React.useRef(null);
	const lineBottomRef = React.useRef(null);

	return (
		<span className={css.container}>
			<span className={css.container_icon}>
				<Image src={icon} alt="" className={css.img} />
			</span>
			<span className={css.container_text}>
				<p className={`f_body_3 ${css.text}`}>
					<span ref={lineTopRef} className={css.line_top}>
						{children}
					</span>
					<span ref={lineBottomRef} className={css.line_bottom}>
						{children}
					</span>
				</p>
			</span>
		</span>
	);
}
