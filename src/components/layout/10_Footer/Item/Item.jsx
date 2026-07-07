"use client";

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
import useHoverLinkScramble from "@/hooks/useHoverLinkScramble";
import useRevealFooter from "@/hooks/useRevealFooter";

// providers / context

// styles
import css from "./Item.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Item({ children, isFooterInView = false, delay = 0 }) {
	const [isHovered, setIsHovered] = React.useState(false);
	const linkRef = React.useRef(null);
	const textRef = React.useRef(null);
	useHoverLinkScramble(linkRef, textRef, "gray", "black");
	useRevealFooter(textRef, isFooterInView, delay);

	return (
		<li className={css.container}>
			<Link
				ref={linkRef}
				href="#"
				className={css.content}
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				onFocus={() => setIsHovered(true)}
				onBlur={() => setIsHovered(false)}
			>
				<Bullet
					color="var(--color-gray-800)"
					colorHover="var(--color-bg-accent)"
					strokeSize={0.75}
					height={0.6}
					isHovered={isHovered}
				/>
				<span ref={textRef} className={`f_mono_body ${css.text}`}>
					{children}
				</span>
			</Link>
		</li>
	);
}
