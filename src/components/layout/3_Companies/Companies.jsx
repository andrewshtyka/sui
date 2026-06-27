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
import { dataCompanies } from "@/data/dataCompanies";

// hooks

// providers / context

// styles
import css from "./Companies.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Companies() {
	return (
		<section className={css.section}>
			<h2 className={`f_h6 f_center ${css.title}`}>
				{dataCompanies.title}
			</h2>

			<div className={css.container_list}>
				<ul className={css.list}>
					{dataCompanies.logos.map(({ id, src, alt }) => (
						<li key={`A-${id}`}>
							<Image src={src} alt={alt} loading="lazy" />
						</li>
					))}
				</ul>
				<ul className={css.list}>
					{dataCompanies.logos.map(({ id, src, alt }) => (
						<li key={`B-${id}`}>
							<Image src={src} alt={alt} loading="lazy" />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
