// logos (lottie)
import lottie_1 from "../../public/images/lottie/lottie-intro_to_sui_stack.json";
import lottie_2 from "../../public/images/lottie/lottie-developer.json";
import lottie_3 from "../../public/images/lottie/lottie-assets_fiscal.json";
import lottie_4 from "../../public/images/lottie/lottie-community_people.json";

// icons
import arrowRight from "../../public/icons/arrow_right.svg";

export const dataGetStarted = {
	title: "Get started",
	items: [
		{
			id: 1,
			title: "Start building",
			text: "Build, launch, and scale your product with the right resources and support.",
			button: {
				title: "Read launch playbook",
				icon: arrowRight,
			},
			lottie: lottie_1,
		},
		{
			id: 2,
			title: "Start coding",
			text: "Get started with Move, the most powerful smart contract programming language.",
			button: {
				title: "Go to docs",
				icon: arrowRight,
			},
			lottie: lottie_2,
		},
		{
			id: 3,
			title: "Start earning",
			text: "Get a wallet, claim SUI, and explore top apps.",
			button: {
				title: "Get a wallet",
				icon: arrowRight,
			},
			lottie: lottie_3,
		},
		{
			id: 4,
			title: "Start connecting",
			text: "Join a global community of builders and collaborators.",
			button: {
				title: "Join the community",
				icon: arrowRight,
			},
			lottie: lottie_4,
		},
	],
};
