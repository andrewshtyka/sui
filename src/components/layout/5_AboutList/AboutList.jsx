// "use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'

// assets

// components
import Item from "./Item/Item";

// constants

// data
import { dataAboutList } from "@/data/dataAboutList";

// hooks

// providers / context

// styles
import css from "./AboutList.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function AboutList() {
	return (
		<section className={css.section}>
			<ul className={css.list}>
				{dataAboutList.map(({ id, text, animationData }) => (
					<Item
						key={id}
						id={id}
						text={text}
						animationData={animationData}
						isLast={dataAboutList.length === id}
					/>
				))}
			</ul>
		</section>
	);
}
