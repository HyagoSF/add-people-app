import React from 'react';

import classes from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {
	const addUserHandler = (event) => {
		event.preventDefault();
		console.log('hello');
	};

	return (
		// 1- to be able to add classes css in my custom elements I have to enter them and...
		<Card className={classes.input}>
			{/* do not add the parenthesis in here because it would instantly
			execute the function */}
			<form onSubmit={addUserHandler}>
				{/* htmlFor => for assigning that for attribute to a label */}
				<label htmlFor="username">Username</label>
				<input id="username" type="text" />

				<label htmlFor="age">Age (Years)</label>
				<input id="age" type="number" />

				<Button className={classes.button} type="">
					Add User
				</Button>
			</form>
		</Card>
	);
};

export default AddUser;
