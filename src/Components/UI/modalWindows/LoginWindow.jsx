import React from 'react';
import BtnSubmitForm from '../buttons/BtnForm/BtnSubmitForm';
import './LoginWindows.scss';

export default function LoginWindow({ hideOnClick }) {

	function removeWindow(e) {
		const filter = document.querySelector('.filter');
		if (e.target == filter) hideOnClick({stat: false});
	}

	return (
		<div className='filter' onClick={removeWindow}>
			<form className='form'>
				<div className='data'>
					<label>
						<span>Email</span>
						<input type='text' />
					</label>
					<label>
						<span>Password</span>
						<input type='password' />
					</label>
				</div>
				<div className='btnPanel'>
					<a href=''>Forgot password?</a>
					<BtnSubmitForm name='Sign In' />
				</div>
			</form>
		</div>
	);
};
