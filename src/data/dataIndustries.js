// logos (lottie)
import lottie_1 from "../../public/images/lottie/lottie-institutions_capital_markets.json";
import lottie_2 from "../../public/images/lottie/lottie-ai.json";
import lottie_3 from "../../public/images/lottie/lottie-defi.json";
import lottie_4 from "../../public/images/lottie/lottie-gaming.json";

// logos (other)
import logo_1 from "../../public/images/industries_logos/logo_1.svg";
import logo_2 from "../../public/images/industries_logos/logo_2.svg";
import logo_3 from "../../public/images/industries_logos/logo_3.svg";
import logo_4 from "../../public/images/industries_logos/logo_4.svg";
import logo_5 from "../../public/images/industries_logos/logo_5.svg";
import logo_6 from "../../public/images/industries_logos/logo_6.svg";
import logo_7 from "../../public/images/industries_logos/logo_7.svg";
import logo_8 from "../../public/images/industries_logos/logo_8.svg";
import logo_9 from "../../public/images/industries_logos/logo_9.svg";
import logo_10 from "../../public/images/industries_logos/logo_10.svg";
import logo_11 from "../../public/images/industries_logos/logo_11.svg";
import logo_12 from "../../public/images/industries_logos/logo_12.svg";

// icons
import arrowRight from "../../public/icons/arrow_right.svg";

export const dataIndustries = {
	title: "Industry transformation powered by Sui",
	subtitle: "The Sui Stack serves the needs of modern industries",
	items: [
		{
			id: 1,
			title: "Institutions & Capital Markets",
			logoTitle: lottie_1,
			logoArr: [logo_1, logo_2, logo_3],
			textArr: [
				"Secure, verifiable workflows",
				"Scalable data and asset management",
				"Transparency without compromise",
			],
			btnTitle: "Explore Sui Stack for Institutions",
		},
		{
			id: 2,
			title: "AI",
			logoTitle: lottie_2,
			logoArr: [logo_4, logo_5, logo_6],
			textArr: [
				"Privacy-first data pipelines",
				"Verifiable model outputs",
				"Integrations with trust and security baked in",
			],
			btnTitle: "Explore Sui Stack for AI",
		},
		{
			id: 3,
			title: "Decentralized Finance (DeFi)",
			logoTitle: lottie_3,
			logoArr: [logo_7, logo_8, logo_9],
			textArr: [
				"Transactions with sub-second finality",
				"Programmable liquidity",
				"Cross-platform interoperability",
			],
			btnTitle: "Explore Sui Stack for DeFi",
		},
		{
			id: 4,
			title: "Gaming",
			logoTitle: lottie_4,
			logoArr: [logo_10, logo_11, logo_12],
			textArr: [
				"Real ownership of in-game assets",
				"High-performance scalability",
				"Seamless player experiences",
			],
			btnTitle: "Explore Sui Stack for Gaming",
		},
	],
	icon: arrowRight,
};
