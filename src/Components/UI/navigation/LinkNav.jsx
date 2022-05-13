import React from 'react'
import classes from './LinkNav.module.scss';

export default function LinkNav({ children, ...props }) {
	return (
		<a href='#' {...props} className={classes.linkNav}>
			{children}
		</a>
	);
};
