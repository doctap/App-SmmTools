import React, { useState } from 'react'
import TestBtnModalWind from '../buttons/TestsBtn/TestBtnModalWind';
import LoginWindow from '../modalWindows/LoginWindow';
import LinkNav from './LinkNav';
import classes from './PanelNav.module.scss';


export default function PanelNav() {

	// const [isShowModal, setIsShowModal] = useState(false);
	// const onClick = () => setIsShowModal(!isShowModal);
	const [isShowModal, setIsShowModal] = useState({ state: false });
	const onShowLoginWindow = () => setIsShowModal({ state: true });
	const onHideLoginWindow = (hide) => setIsShowModal(hide);

	return (
		<nav className={classes.block}>
			<div className={classes.nav}>
				<h1 className={classes.logo}>SmmTools</h1>
				<div className={classes.links}>
					<LinkNav>Home</LinkNav>
					<LinkNav>Support</LinkNav>
					<LinkNav>Community</LinkNav>
					<LinkNav>Start</LinkNav>
				</div>

				<TestBtnModalWind name='Login' onClick={onShowLoginWindow} />
				{
					isShowModal.state
						? <LoginWindow hideOnClick={onHideLoginWindow} />
						: null
				}
			</div>
		</nav>
	);
};
