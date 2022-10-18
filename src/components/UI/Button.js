import React from 'react';
import classes from './Button.module.css';

const Button = (props) => {
	return (
		<button
			className={`${classes.button} ${props.className}`}
			// I'm accepting to get the type from the custom Button, and if I don't get nothing from there, it'll be button as type
			type={props.type || 'button'}
			// I'll have a onClick prop on my Button component and any function received there is just passed onto the built in button component here through its onClick prop
			onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;
