// import font
import localFont from "next/font/local";

export const serif = localFont({
	variable: "--font-serif",
	src: "../fonts/TWKEverett-Regular.otf",
	weight: "400",
	style: "normal",
	display: "swap",
});

export const mono = localFont({
	variable: "--font-mono",
	src: "../fonts/TWKEverettMono-Regular.otf",
	weight: "400",
	style: "normal",
	display: "swap",
});
