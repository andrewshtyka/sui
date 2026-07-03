"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { motion, useScroll, useTransform } from "motion/react";

// assets

// components
import Image from "next/image";

// constants

// data
import { dataAscii } from "@/data/dataAscii";

// hooks

// providers / context

// styles
import css from "./SuiAscii.module.css";

// utility
import React from "react";

// #endregion ===========================

const MotionImage = motion.create(Image);

const imageBase = dataAscii.find((obj) => obj.id === 0);
const imagesAnimated = dataAscii.filter((obj) => obj.id !== 0);

const step = 0.15;
const durationTotal = imagesAnimated.length * step;

export default function SuiAscii() {
	const ref = React.useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1.25, 1]);
	const y = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		["20svh", "40svh", "100svh"]
	);
	const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

	return (
		<section className={css.section}>
			<motion.div
				ref={ref}
				className={css.container}
				style={{ scale, y, opacity }}
			>
				{imageBase && (
					<Image
						src={imageBase.src}
						alt={imageBase.alt}
						className={`${css.img} ${css.img_base}`}
					/>
				)}
				{imagesAnimated.map(({ id, src, alt }, i) => (
					<MotionImage
						key={id}
						src={src}
						alt={alt}
						className={css.img}
						//
						// animation
						initial={{ opacity: 0 }}
						animate={{ opacity: [0, 1, 1, 0] }}
						transition={{
							duration: durationTotal,
							times: [
								i / imagesAnimated.length,
								(i + 0.01) / imagesAnimated.length,
								(i + 0.99) / imagesAnimated.length,
								(i + 1) / imagesAnimated.length,
							],
							repeat: Infinity,
							ease: "linear",
						}}
					/>
				))}
			</motion.div>
		</section>
	);
}
