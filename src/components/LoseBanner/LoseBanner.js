import React from 'react';
import GameBanner from '../GameBanner/GameBanner';

function LoseBanner({ answer }) {
	return (
		<GameBanner variant={'sad'}>
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</GameBanner>
	);
}

export default LoseBanner;
