import React from 'react';
import './BtnSubmitForm.scss';

export default function BtnSubmitForm(props) {
  return (
	 <button className='btnSubmitForm' >
		 {props.name}
	 </button>
  );
};
