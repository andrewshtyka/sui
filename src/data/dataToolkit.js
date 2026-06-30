// posters
import poster_1 from "../../public/videos/toolkit/poster_1.webp";
import poster_2 from "../../public/videos/toolkit/poster_2.webp";
import poster_3 from "../../public/videos/toolkit/poster_3.webp";
import poster_4 from "../../public/videos/toolkit/poster_4.webp";
import poster_5 from "../../public/videos/toolkit/poster_5.webp";
import poster_6 from "../../public/videos/toolkit/poster_6.webp";

// logos
import logo_1 from "../../public/images/toolkit/logos/sui.svg";
import logo_2 from "../../public/images/toolkit/logos/walrus.svg";
import logo_3 from "../../public/images/toolkit/logos/seal.svg";
import logo_4 from "../../public/images/toolkit/logos/nautilus.svg";
import logo_5 from "../../public/images/toolkit/logos/deepbook.svg";
import logo_6 from "../../public/images/toolkit/logos/sui_ns.svg";

export const dataToolkit = {
	title: "Innovation, engineered.",
	subtitle: "The Sui Stack is a native composable toolkit for builders",
	items: [
		{
			id: 1,
			title: "Asset and service coordination",
			video: {
				src: "/videos/toolkit/vid_1.mp4",
				poster: "/videos/toolkit/poster_1.webp",
			},
			logo: {
				src: logo_1,
				alt: "Sui",
			},
		},
		{
			id: 2,
			title: "Trusted data layer",
			video: {
				src: "/videos/toolkit/vid_2.mp4",
				poster: "/videos/toolkit/poster_2.webp",
			},
			logo: {
				src: logo_2,
				alt: "Walrus",
			},
		},
		{
			id: 3,
			title: "Data security",
			video: {
				src: "/videos/toolkit/vid_3.mp4",
				poster: "/videos/toolkit/poster_3.webp",
			},
			logo: {
				src: logo_3,
				alt: "Seal",
			},
		},
		{
			id: 4,
			title: "Verifiable offchain compute",
			video: {
				src: "/videos/toolkit/vid_4.mp4",
				poster: "/videos/toolkit/poster_4.webp",
			},
			logo: {
				src: logo_4,
				alt: "Nautilus",
			},
		},
		{
			id: 5,
			title: "Liquidity management",
			video: {
				src: "/videos/toolkit/vid_5.mp4",
				poster: "/videos/toolkit/poster_5.webp",
			},
			logo: {
				src: logo_5,
				alt: "DeepBook",
			},
		},
		{
			id: 6,
			title: "Identity management",
			video: {
				src: "/videos/toolkit/vid_6.mp4",
				poster: "/videos/toolkit/poster_6.webp",
			},
			logo: {
				src: logo_6,
				alt: "SuiNS",
			},
		},
	],
};
