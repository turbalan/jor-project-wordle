import React from 'react';
import { range } from '../../utils';

function Guess({ guess }) {
	let word = range(5);
	if (guess) {
		word = Array.from(guess);
	} else {
		word.forEach((_, index) => (word[index] = ''));
	}
	return (
		<p className="guess">
			{word.map((letter) => (
				<span className="cell" key={crypto.randomUUID()}>
					{letter}
				</span>
			))}
		</p>
	);
}

export default Guess;
