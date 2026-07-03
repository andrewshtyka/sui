// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import Link from "next/link";
import Bullet from "@/components/ui/Bullet/Bullet";

// constants

// data

// hooks

// providers / context

// styles
import css from "./Item.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Item({ children }) {
	return (
		<li className={css.container}>
			<Link href="#" className={css.content}>
				<Bullet
					color="var(--color-gray-800)"
					strokeSize={0.75}
					height={0.6}
				/>
				<span className={`f_mono_body ${css.text}`}>{children}</span>
			</Link>
		</li>
	);
}
