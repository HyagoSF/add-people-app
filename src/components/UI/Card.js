import React from 'react';
//to be able to import modules I have to write what I want to import from the module, in this case the classes
import classes from './Card.module.css';

const Card = (props) => {
	// this {props.children} is because I'm using this card to wrap something, and this something is exactly the Card's children.
	//to be able to use the css classes using module, I have to write like below, classes.'the_name_class_I_want'

	return (
		// ... and hard code here, because I can just apply modules classes to real HTML elements
		<div className={`${classes.card} ${props.className}`}>
			{props.children}
		</div>
	);
};

export default Card;
