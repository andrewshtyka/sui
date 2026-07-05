// "use client";

// #region ============================== Imports

// animation
// import * as motion from "motion/react-client";
import { cubicBezier, motion } from "motion/react";

// assets

// components
import Image from "next/image";

// constants

// data

// hooks

// providers / context

// styles
import css from "./ButtonList.module.css";

// utility
import React from "react";

// #endregion ===========================

const MotionImage = motion.create(Image);

export default function ButtonList({ data, isHoveredCard = false }) {
	const [isHoveredBtn, setIsHoveredBtn] = React.useState(false);

	return (
		<motion.div
			className={css.container}
			onMouseEnter={() => setIsHoveredBtn(true)}
			onFocus={() => setIsHoveredBtn(true)}
			onMouseLeave={() => setIsHoveredBtn(false)}
			onBlur={() => setIsHoveredBtn(false)}
			initial={{ "--isDesktop": "inset(0% 0% 100% 0%)" }}
			animate={{
				"--isDesktop": isHoveredCard
					? "inset(0% 0% 0% 0%)"
					: "inset(0% 0% 100% 0%)",
			}}
		>
			<div className={css.container_icon}>
				{/* <Image src={data.icon} alt="" /> */}
				<MotionImage
					src={data.icon}
					alt=""
					className={css.img_1}
					{...anim(variantsIcon, isHoveredBtn)}
				/>
				<MotionImage
					src={data.icon}
					alt=""
					className={css.img_2}
					{...anim(variantsIcon, isHoveredBtn)}
				/>
			</div>
			<p className={`f_body_2 ${css.text}`}>{data.title}</p>
		</motion.div>
	);
}

const variantsIcon = {
	initial: {
		x: 0,
	},
	animate: {
		hover: { x: "200%" },
		blur: { x: 0 },
	},
	transition: {
		duration: 0.5,
		ease: cubicBezier(0.25, 0, 0, 1),
	},
};

function anim(obj, state) {
	return {
		variants: obj,
		initial: obj.initial,
		animate: state ? obj.animate.hover : obj.animate.blur,
		transition: obj.transition,
	};
}
