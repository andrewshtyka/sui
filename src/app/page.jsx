// 'use client';

// #region ============================== Imports

// animation
// import { motion } from "motion/react";

// assets

// components
import Footer from "@/components/layout/10_Footer/Footer";
import HeroBg from "@/components/layout/1_HeroBg/HeroBg";
import Hero from "@/components/layout/2_Hero/Hero";
import Companies from "@/components/layout/3_Companies/Companies";
import About from "@/components/layout/4_About/About";
import AboutList from "@/components/layout/5_AboutList/AboutList";
import Toolkit from "@/components/layout/6_Toolkit/Toolkit";
import SuiAscii from "@/components/layout/7_SuiAscii/SuiAscii";
import Industries from "@/components/layout/8_Industries/Industries";
import GetStarted from "@/components/layout/9_GetStarted/GetStarted";
import Header from "@/components/layout/0_Header/Header";
import TopWrapper from "@/components/layout/TopWrapper/TopWrapper";

// constants

// hooks

// providers / context

// styles
import css from "./page.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function HomePage() {
	return (
		<>
			<Header />

			<TopWrapper>
				<HeroBg />
				<Hero />
				<Companies />
				<About />
				<AboutList />
			</TopWrapper>

			<Toolkit />

			<div className={css.container}>
				<SuiAscii />
				<Industries />
				<GetStarted />
				<Footer />
			</div>
		</>
	);
}
