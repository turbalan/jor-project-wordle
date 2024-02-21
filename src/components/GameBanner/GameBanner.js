import React from 'react';

function GameBanner({ variant, children }) {
	return <div className={`banner ${variant}`}>{children}</div>;
}
export default GameBanner;
