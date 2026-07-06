/**
 * @param arrOfNodes - array on chars from DOM
 * @param shuffledArrHalf - array of numbers (to be scrambled)
 * @param restArr - array of numbers (won't be scrambled, only color change)
 */

export default function getArrOfShuffledChars(arrOfNodes, shuffledArrHalf) {
	const selectedCharsArr = [];
	const restCharsArr = [];

	for (const charNode of arrOfNodes) {
		const nodeNumber = Number(charNode.classList[1].slice(4));

		if (shuffledArrHalf.includes(nodeNumber)) {
			selectedCharsArr.push(charNode);
		} else {
			restCharsArr.push(charNode);
		}
	}

	return { selectedCharsArr, restCharsArr };
}
