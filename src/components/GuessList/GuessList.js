import React from 'react';
import Guess from '../Guess/Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessList({ guessList, answer }) {
	let newRows = range(NUM_OF_GUESSES_ALLOWED);

	newRows.map((_, index) => {
		if (!guessList[index]) return (newRows[index] = null);
		return (newRows[index] = guessList[index]);
	});

	return (
		<div className="guess-results">
			{newRows.map((row, index) => {
				return <Guess guess={row} answer={answer} key={index} />;
			})}
		</div>
	);
}

export default GuessList;
