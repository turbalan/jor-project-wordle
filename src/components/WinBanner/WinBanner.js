import React from 'react';
import GameBanner from '../GameBanner/GameBanner';

function WinBanner({ guessList }) {
	const message = () => (
		<>
			<strong>Congratulations!</strong> Got it in{' '}
			<strong>
				{guessList.length} {guessList.length > 1 ? 'guesses' : 'guess'}!
			</strong>
		</>
	);
	return (
		<GameBanner variant="happy">
			<p>{message()}</p>
		</GameBanner>
	);
}

export default WinBanner;
