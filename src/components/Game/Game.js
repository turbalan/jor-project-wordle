import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import LoseBanner from '../LoseBanner/LoseBanner';
import WinBanner from '../WinBanner/WinBanner';
import ResetButton from '../ResetButton/ResetButton';

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
	const [guessList, setGuessList] = React.useState([]);
	const [gameStatus, setGameStatus] = React.useState('running');
	const [answer, setAnswer] = React.useState(() => {
		return sample(WORDS);
	});

	const handleCreateAnswer = () => {
		return sample(WORDS);
	};

	const handleSubmitGuess = function (guess) {
		if (guess.length < 5) return;
		const nextGuesses = [...guessList, guess];
		setGuessList(nextGuesses);
		if (guess === answer) setGameStatus((gameStatus) => (gameStatus = 'won'));
		else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
			setGameStatus((gameStatus) => (gameStatus = 'lost'));
		}
	};

	return (
		<>
			<GuessList guessList={guessList} answer={{ answer }} />
			<GuessInput
				handleSubmitGuess={handleSubmitGuess}
				gameStatus={gameStatus}
			/>

			{gameStatus === 'lost' && <LoseBanner answer={answer} />}
			{gameStatus === 'won' && <WinBanner guessList={guessList} />}
			{gameStatus !== 'running' && (
				<ResetButton
					setAnswer={setAnswer}
					setGuessList={setGuessList}
					setGameStatus={setGameStatus}
					handleCreateAnswer={handleCreateAnswer}
				/>
			)}
		</>
	);
}

export default Game;
