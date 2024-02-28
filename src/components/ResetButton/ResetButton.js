import React from 'react';

function ResetButton({
	setAnswer,
	setGameStatus,
	setGuessList,
	handleCreateAnswer,
}) {
	return (
		<button
			className="reset-button"
			onClick={() => {
				setGameStatus('running');
				setGuessList([]);
				setAnswer((currentAnswer) => {
					currentAnswer = handleCreateAnswer();
					return currentAnswer;
				});
			}}
		>
			restart game
		</button>
	);
}

export default ResetButton;
