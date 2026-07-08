"use client";

// #region ============================== Imports

// animation
// import * as motion from 'motion/react-client'
import { AnimatePresence, cubicBezier, motion } from "motion/react";

// assets
import preloader_line from "../../../../public/images/preloader/preloader_line.avif";

// components
import DottedLine from "@/components/ui/DottedLine/DottedLine";
import Image from "next/image";

// constants

// data

// hooks
import useAnimateNumbers from "@/hooks/useAnimateNumbers";

// providers / context
import { PreloaderContext } from "@/providers/PreloaderProvider";

// styles
import css from "./Preloader.module.css";

// utility
import React from "react";
import { useLenis } from "lenis/react";

// #endregion ===========================

const MotionImage = motion.create(Image);

const TIME_BEFORE_SCROLLABLE_MS = 2000;

const ANIM_DURATION_MS = 1000 * 1.5;
const ANIM_DURATION_SEC = ANIM_DURATION_MS * 0.001;

export default function Preloader() {
	const { isVisiblePreloader, setIsVisiblePreloader } =
		React.useContext(PreloaderContext);
	const [startAnimation, setStartAnimation] = React.useState(false);
	const lenis = useLenis();

	// lenis scroll control
	React.useEffect(() => {
		if (!lenis) return;

		if (isVisiblePreloader) {
			lenis.scrollTo(0, { immediate: true });
			lenis.stop();
			return;
		}

		const lenisId = setTimeout(() => {
			lenis.scrollTo(0, { immediate: true });
			lenis.start();
		}, TIME_BEFORE_SCROLLABLE_MS);

		return () => clearTimeout(lenisId);
	}, [lenis, isVisiblePreloader]);

	// 1. wait until resources and fonts are loaded, then start animation
	React.useEffect(() => {
		const resourcesPromise = new Promise((res) => {
			if (document.readyState === "complete") {
				res();
				return;
			}
			window.addEventListener("load", () => res(), { once: true });
		});

		const fontsPromise = document.fonts.ready;

		Promise.all([resourcesPromise, fontsPromise]).then(() => {
			lenis.scrollTo(0, { immediate: true });
			setStartAnimation(true);
		});
	}, [lenis]);

	// 2. if startAnimation === true, start timer (to remove preloader)
	React.useEffect(() => {
		if (!startAnimation) return;

		document.body.style.cursor = "default";
		const id = setTimeout(() => {
			lenis.scrollTo(0, { immediate: true });
			setIsVisiblePreloader(false);
		}, ANIM_DURATION_MS);

		return () => clearTimeout(id);
	}, [startAnimation, setIsVisiblePreloader, lenis]);

	// 3. run numbers animation when startAnimation === true
	const numRef = React.useRef();
	useAnimateNumbers(numRef, 0, 100, ANIM_DURATION_SEC, startAnimation);

	return (
		<AnimatePresence mode="wait">
			{isVisiblePreloader && (
				<motion.section
					className={css.section}
					initial={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					exit={{ opacity: 0 }}
				>
					{/* line */}
					<motion.div
						className={css.container_line}
						{...anim(variantsLine, startAnimation)}
					>
						<motion.div
							className={css.container_image}
							{...anim(variantsContainerImg, startAnimation)}
						>
							<MotionImage
								src={preloader_line}
								alt="Line"
								className={css.img}
								{...anim(variantsImg, startAnimation)}
							/>
						</motion.div>
						<DottedLine
							isHorizontal={false}
							strokeWidth={1}
							strokeDashStart={4}
							strokeDashEnd={8}
						/>
						<div className={css.box}>
							<motion.p
								ref={numRef}
								className={`f_body_3 ${css.num}`}
							>
								0%
							</motion.p>
						</div>
					</motion.div>
				</motion.section>
			)}
		</AnimatePresence>
	);
}

const variantsLine = {
	initial: {
		x: 0,
	},
	animate: (animationStatus) => ({
		x: animationStatus ? "var(--position-end)" : 0,
	}),
	transition: {
		duration: ANIM_DURATION_SEC,
		ease: cubicBezier(0.6, 0, 0.75, 1),
	},
};

const variantsContainerImg = {
	initial: {
		"--mask-end": "0%",
	},
	animate: (animationStatus) => ({
		"--mask-end": animationStatus ? ["0%", "50%", "50%", "100%"] : "0%",
	}),
	transition: {
		times: [0, 0.6, 0.5, 1],
		duration: ANIM_DURATION_SEC,
		ease: cubicBezier(0.6, 0, 0.75, 1),
	},
};

const variantsImg = {
	initial: {
		width: "80svw",
	},
	animate: (animationStatus) => ({
		width: animationStatus ? "0svw" : "80svw",
	}),
	transition: {
		duration: ANIM_DURATION_SEC,
		ease: cubicBezier(0.6, 0, 0.75, 1),
	},
};

function anim(obj, animationStatus) {
	return {
		variants: obj,
		initial: obj.initial,
		animate: obj.animate(animationStatus),
		transition: obj.transition,
	};
}
