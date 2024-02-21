import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import GameBanner from '../GameBanner/GameBanner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guessList, setGuessList] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState('running');

	const handleSubmitGuess = function (guess) {
		if (guess.length < 5) return;
		const nextGuesses = [...guessList, guess];
		setGuessList(nextGuesses);
		if (guess === answer) setGameStatus((gameStatus) => 'won');
		else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus('lost');
		}
	};

	return (
		<>
			<GuessList guessList={guessList} answer={{ answer }} />
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={gameStatus}
			/>

			{gameStatus === 'lost' && (
				<GameBanner variant={'sad'}>
					<p>
						Sorry, the correct answer is <strong>{answer}</strong>.
					</p>
				</GameBanner>
			)}
			{gameStatus === 'won' && (
				<GameBanner variant={'happy'}>
					<p>
						<strong>Congratulations!</strong> Got it in{' '}
						<strong>{guessList.length} guesses</strong>.
					</p>
				</GameBanner>
			)}
		</>
	);
}

export default Game;
