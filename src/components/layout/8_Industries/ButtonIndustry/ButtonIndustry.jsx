// "use client";

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
	console.log(icon);

	return (
		<span className={css.container}>
			<span className={css.container_icon}>
				<Image src={icon} alt="" className={css.img} />
			</span>
			<span className={`f_body_3 ${css.text}`}>{children}</span>
		</span>
	);
}
