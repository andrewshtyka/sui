"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion, useInView } from "motion/react";

// assets

// components
import Item from "./Item/Item";
import DottedLine from "@/components/ui/DottedLine/DottedLine";
import Image from "next/image";

// constants

// data
import { dataFooter } from "@/data/dataFooter";

// hooks

// providers / context

// styles
import css from "./Footer.module.css";

// utility
import React from "react";
import IconLink from "./IconLink/IconLink";

// #endregion ===========================

export default function Footer() {
	const footerRef = React.useRef(null);
	const isFooterInView = useInView(footerRef, {
		margin: "0% 0% 5% 0%",
		once: true
	});

	return (
		<footer ref={footerRef} className={css.section}>
			<div className={css.line}>
				<DottedLine />
				<Image
					src={dataFooter.emblem.src}
					alt={dataFooter.emblem.alt}
					className={css.emblem}
				/>
			</div>
			<div className={css.container_top}>
				{/* col 1 */}
				<div className={css.col_1}>
					<h3 className={`f_mono_title f_uppercase ${css.title}`}>
						{dataFooter.platform.title}/
					</h3>
					<ul>
						{dataFooter.platform.items.map((text, i) => (
							<Item
								key={i}
								isFooterInView={isFooterInView}
								delay={i}
							>
								{text}
							</Item>
						))}
					</ul>
				</div>

				{/* col 2 */}
				<div className={css.col_2}>
					<h3 className={`f_mono_title f_uppercase ${css.title}`}>
						{dataFooter.solutions.title}/
					</h3>
					<ul>
						{dataFooter.solutions.items.map((text, i) => (
							<Item
								key={i}
								isFooterInView={isFooterInView}
								delay={i}
							>
								{text}
							</Item>
						))}
					</ul>
				</div>

				{/* col 3 */}
				<div className={css.col_3}>
					<div className={css.top}>
						<h3 className={`f_mono_title f_uppercase ${css.title}`}>
							{dataFooter.developers.title}/
						</h3>
						<ul>
							{dataFooter.developers.items.map((text, i) => (
								<Item
									key={i}
									isFooterInView={isFooterInView}
									delay={i}
								>
									{text}
								</Item>
							))}
						</ul>
					</div>
					<div className={css.bottom}>
						<h3 className={`f_mono_title f_uppercase ${css.title}`}>
							{dataFooter.community.title}/
						</h3>
						<ul>
							{dataFooter.community.items.map((text, i) => (
								<Item
									key={i}
									isFooterInView={isFooterInView}
									delay={i}
								>
									{text}
								</Item>
							))}
						</ul>
					</div>
				</div>

				{/* col 4 */}
				<div className={css.col_4}>
					<div className={css.top}>
						<h3 className={`f_mono_title f_uppercase ${css.title}`}>
							{dataFooter.resources.title}/
						</h3>
						<ul>
							{dataFooter.resources.items.map((text, i) => (
								<Item
									key={i}
									isFooterInView={isFooterInView}
									delay={i}
								>
									{text}
								</Item>
							))}
						</ul>
					</div>
					<div className={css.bottom}>
						<h3 className={`f_mono_title f_uppercase ${css.title}`}>
							{dataFooter.about.title}/
						</h3>
						<ul>
							{dataFooter.about.items.map((text, i) => (
								<Item
									key={i}
									isFooterInView={isFooterInView}
									delay={i}
								>
									{text}
								</Item>
							))}
						</ul>
					</div>
				</div>
			</div>

			<div className={css.container_bottom}>
				<ul className={css.icons}>
					{dataFooter.icons.map(({ id, src, alt }) => (
						<li key={id}>
							<IconLink src={src} alt={alt} />
						</li>
					))}
				</ul>
				<p className="f_mono_body">{dataFooter.text}</p>
			</div>
		</footer>
	);
}
