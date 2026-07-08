// #region ============================== Imports

// components

// fonts
import { serif, mono } from "@/utils/importFonts";

// providers
import HeroTextHoverProvider from "@/providers/HeroTextHoverProvider";
import PreloaderProvider from "@/providers/PreloaderProvider";

// styles
import "@/styles/tokens/spacings.css";
import "@/styles/tokens/colors.css";
import "@/styles/tokens/fonts.css";
import "@/styles/reset.css";
import "@/styles/global.css";

// utility
import ReactLenis from "lenis/react";

// #endregion ===========================

export const metadata = {
	title: "Sui | Home-page remake",
	description: "Reverse-engineered home page of Sui.io, by Andrew Shtyka",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${serif.variable} ${mono.variable}`}>
			<body>
				<ReactLenis root={true} options={{ autoRaf: true }} />
				<PreloaderProvider>
					<HeroTextHoverProvider>{children}</HeroTextHoverProvider>
				</PreloaderProvider>
			</body>
		</html>
	);
}
