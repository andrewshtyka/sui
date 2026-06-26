// #region ============================== Imports

// components

// fonts
import { serif, mono } from "@/utils/importFonts";

// providers
import HeroTextHoverProvider from "@/providers/HeroTextHoverProvider";

// styles
import "@/styles/tokens/spacings.css";
import "@/styles/tokens/colors.css";
import "@/styles/tokens/fonts.css";
import "@/styles/reset.css";
import "@/styles/global.css";

// #endregion ===========================

export const metadata = {
	title: "Sui | The Full Stack for a New Global Economy",
	description: "The Full Stack for a New Global Economy",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${serif.variable} ${mono.variable}`}>
			<body>
				<HeroTextHoverProvider>{children}</HeroTextHoverProvider>
			</body>
		</html>
	);
}
