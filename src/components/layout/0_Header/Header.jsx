"use client";

// #region ============================== Imports

// animation
// import * as motion from "motion/react-client";
import { motion, cubicBezier } from "motion/react";

// assets

// components
import ButtonSecondary from "@/components/ui/ButtonSecondary/ButtonSecondary";
import Item from "./Item/Item";
import Image from "next/image";

// constants

// data
import { dataHeader } from "@/data/dataHeader";

// hooks

// providers / context

// styles
import css from "./Header.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Header() {
	return (
		<motion.header className={css.header} {...anim(variantsHeader)}>
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
				<span className={css.desktop_only}>
					<ButtonSecondary>{dataHeader.cta}</ButtonSecondary>
				</span>
				<span className={css.mobile_only}>
					<button type-="button" className={css.cta_mobile}>
						<div className={css.line} />
						<div className={css.line} />
					</button>
				</span>
			</div>
		</motion.header>
	);
}

const variantsHeader = {
	initial: {
		y: "-150%",
	},
	animate: {
		y: 0,
	},
	transition: {
		delay: 0.5,
		duration: 0.75,
		ease: cubicBezier(0.25, 0, 0, 1),
	},
};

function anim(obj) {
	return {
		variants: obj,
		initial: obj.initial,
		animate: obj.animate,
		transition: obj.transition,
	};
}
