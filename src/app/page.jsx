// 'use client';

// #region ============================== Imports

// animation
// import { motion } from "motion/react";

// assets

// components
import HeroBg from "@/components/layout/1_HeroBg/HeroBg";
import Hero from "@/components/layout/2_Hero/Hero";
import Companies from "@/components/layout/3_Companies/Companies";
import About from "@/components/layout/4_About/About";
import AboutList from "@/components/layout/5_AboutList/AboutList";

// constants

// hooks

// providers / context

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export default function HomePage() {
	return (
		<>
			<HeroBg />
			<Hero />
			<Companies />
			<About />
			<AboutList />
		</>
	);
}
