import React from 'react';

function GuessInput({ handleSubmitGuess, gameStatus }) {
	const [guess, setGuess] = React.useState('');

	const handleSubmit = function (event) {
		event.preventDefault();
		handleSubmitGuess(guess);
		setGuess('');
	};

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				disabled={gameStatus !== 'running'}
				pattern="[a-zA-Z]{5}"
				value={guess}
				onChange={(event) => {
					setGuess(event.target.value.toUpperCase());
				}}
			/>
		</form>
	);
}

export default GuessInput;
