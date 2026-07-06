import { shuffle } from "lodash";

/**
 * @param textLength - number
 *
 * GET NUMBERS OF CHARS CLASSES THAT WILL ANIMATE
 * 1. get str length (i.e. 10)
 * 2. create arr with numbers from 1 to 10
 * 3. shuffle randomly, get smthn like [2, 7, 1, ...]
 * 4. new arr with half of original array length
 */

export default function getHalfAndShuffledArray(textLength) {
	const originalArr = [];
	for (let i = 1; i <= textLength; i++) {
		originalArr.push(i);
	}

	const shuffledArr = shuffle(originalArr);
	const half = Math.ceil(shuffledArr.length / 2);
	const shuffledArrHalf = shuffledArr.slice(0, half);
	const restArr = shuffledArr.slice(half);

	return { shuffledArrHalf, restArr };
}
