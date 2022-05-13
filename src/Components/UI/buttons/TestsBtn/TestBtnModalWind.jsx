import React from 'react';
import './TestBtnModalWind.scss';

export default function TestBtnModalWind(props) {
	return (
		<button className='testBtn' onClick={props.onClick}>
			{props.name}
		</button>
	);
};
