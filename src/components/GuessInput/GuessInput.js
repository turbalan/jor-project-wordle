import React from 'react';

function GuessInput({ guessList, setGuestList }) {
	const [guess, setGuess] = React.useState('');

	const handleGuess = function (event) {
		setGuess(event.target.value.toUpperCase());
	};

	const handleSubmit = function (event) {
		event.preventDefault();
		if (guess.length < 5) return;
		setGuestList([...guessList, guess]);
		setGuess('');
	};

	return (
		<form className="guess-input-wrapper" onSubmit={handleSubmit}>
			<label htmlor="guess-input">Enter guess:</label>
			<input
				id="guess-input"
				type="text"
				pattern="[a-zA-Z]{5}"
				value={guess}
				onChange={handleGuess}
			/>
		</form>
	);
}

export default GuessInput;
