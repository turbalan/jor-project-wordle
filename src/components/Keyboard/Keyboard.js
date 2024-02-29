import React from 'react';
import { checkGuess } from '../../game-helpers';

const compareAlphabets = (checkedObject, originalObject) => {
	checkedObject.forEach(function (item) {
		let originalItem = originalObject.find(function (originalItem) {
			return originalItem.letter === item.letter;
		});
		if (originalItem) {
			originalItem.status = item.status;
		}
	});
	return originalObject;
};

function KeyboardKey({ letter }) {
	return <div className={`keyboard-key ${letter.status}`}>{letter.letter}</div>;
}

function Keyboard({ guessList, answer }) {
	const localGuesses = Array.from(
		guessList
			.map((guess) => {
				const checkedGuess = checkGuess(guess, answer);
				return checkedGuess;
			})
			.flat()
	);

	let alphabet = Array.from(Array(26)).map((e, i) => {
		const localString = { letter: String.fromCharCode(i + 65), status: '' };
		return localString;
	});

	const statusAlphabet = compareAlphabets(localGuesses, alphabet);

	return (
		<div className="keyboard">
			{statusAlphabet.map((element) => {
				return <KeyboardKey key={element.letter} letter={element} />;
			})}
		</div>
	);
}

export default Keyboard;
