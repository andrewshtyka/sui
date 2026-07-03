"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion, useInView } from "motion/react";

// assets

// components
import Link from "next/link";
import Image from "next/image";
import LottieContainer from "@/components/ui/LottieContainer/LottieContainer";
import DottedLine from "@/components/ui/DottedLine/DottedLine";
import Bullet from "@/components/ui/Bullet/Bullet";
import ButtonIndustry from "../ButtonIndustry/ButtonIndustry";

// constants

// data

// hooks

// providers / context

// styles
import css from "./Card.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Card({
	title,
	logoTitle,
	logoArr,
	textArr,
	btnTitle,
	icon,
}) {
	const ref = React.useRef(null);
	const isInView = useInView(ref);

	return (
		<Link ref={ref} href="#" className={css.card}>
			{/* top */}
			<span className={css.top}>
				<span className={css.container_title}>
					<span className={css.container_logoTitle}>
						<LottieContainer
							animationData={logoTitle}
							isInView={isInView}
							height="100%"
							backgroundColor="transparent"
						/>
					</span>
					<h3 className={`f_body_1 ${css.title}`}>{title}</h3>
				</span>

				<span className={css.container_line_mobile}>
					<DottedLine />
				</span>

				<ul className={css.container_logos}>
					{logoArr.map((src, i) => (
						<li key={i} className={css.container_inner_logo}>
							<Image src={src} alt="" className={css.img} />
						</li>
					))}
				</ul>
			</span>
			<span className={css.container_line_top}>
				<DottedLine />
			</span>

			{/* texts list */}
			<ul className={css.list}>
				{textArr.map((text, i) => (
					<li key={i} className={css.item}>
						<Bullet />
						<p className={`f_body_2 ${css.text}`}>{text}</p>
					</li>
				))}
			</ul>
			<span className={css.container_line_bottom}>
				<DottedLine />
			</span>
			<ButtonIndustry icon={icon}>{btnTitle}</ButtonIndustry>
		</Link>
	);
}
