import React from 'react';
import {
	checkGuess,
	createKeyboard,
	compareAlphabets,
} from '../../game-helpers';

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

	const keyboardString = createKeyboard('qwertyuiopasdfghjklzxcvbnm');

	const statusAlphabet = compareAlphabets(localGuesses, keyboardString);

	return (
		<div className="keyboard">
			{statusAlphabet.map((element) => {
				if (element.letter === 'A' || element.letter === 'Z')
					return (
						<React.Fragment key={element.letter}>
							<div style={{ width: '100%' }}></div>
							<KeyboardKey letter={element} />
						</React.Fragment>
					);
				return <KeyboardKey key={element.letter} letter={element} />;
			})}
		</div>
	);
}

export default Keyboard;
