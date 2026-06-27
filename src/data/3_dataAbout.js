import lottie_1 from "../../public/images/lottie/lottie-products_apps.json";
import lottie_2 from "../../public/images/lottie/lottie-verified_user.json";
import lottie_3 from "../../public/images/lottie/lottie-sharing_shared_value.json";

export const dataAbout = {
	top: {
		title: "The economy, rebuilt on integrity",
		content: [
			{
				id: 1,
				text: "Sui is the only platform where assets, data, and permissions can be owned, programmed, and verified. The result?",
			},
			{
				id: 2,
				text: "Superior products",
				animationData: lottie_1,
				endPoint: 0.5,
			},
			{
				id: 3,
				text: ", ",
			},
			{
				id: 4,
				text: "real user trust",
				animationData: lottie_2,
				endPoint: 1,
			},
			{
				id: 5,
				text: " ",
			},
			{
				id: 6,
				text: "and ",
			},
			{
				id: 7,
				text: "value that's shared",
				animationData: lottie_3,
				endPoint: 1,
			},
			{
				id: 8,
				text: ", not extracted.",
			},
		],
	},

	bottom: {
		title: "Sue is",
		decorative: "[ → ]",
	},
};
