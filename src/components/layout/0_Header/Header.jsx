// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
// import { motion } from 'motion/react'

// assets

// components
import ButtonSecondary from "@/components/ui/ButtonSecondary/ButtonSecondary";

// constants

// data
import { dataHeader } from "@/data/dataHeader";

// hooks

// providers / context

// styles
import Image from "next/image";
import css from "./Header.module.css";

// utility
import React from "react";
import Item from "./Item/Item";

// #endregion ===========================

export default function Header() {
	return (
		<header className={css.header}>
			{/* logo */}
			<div className={css.col_1}>
				<Image
					src={dataHeader.logo.src}
					alt={dataHeader.logo.alt}
					className={css.logo}
				/>
			</div>

			{/* items */}
			<ul className={css.col_2}>
				{dataHeader.items.map((el, i) => (
					<Item
						key={i}
						src={dataHeader.icon.src}
						alt={dataHeader.icon.alt}
					>
						{el}
					</Item>
				))}
			</ul>

			{/* CTA */}
			<div className={css.col_3}>
				<ButtonSecondary>{dataHeader.cta}</ButtonSecondary>
			</div>
		</header>
	);
}
