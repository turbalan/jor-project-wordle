import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guess, answer }) {
	let word = range(5);
	let correctGuess = checkGuess(guess, answer.answer);

	return (
		<p className="guess">
			{word.map((_, index) => (
				<span
					className={`cell ${correctGuess ? correctGuess[index].status : ''}`}
					key={crypto.randomUUID()}
				>
					{correctGuess ? correctGuess[index].letter : ''}
				</span>
			))}
		</p>
	);
}

export default Guess;
