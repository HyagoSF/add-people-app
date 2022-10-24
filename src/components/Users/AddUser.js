import { React, useState } from 'react';

import classes from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');

	const addUserHandler = (event) => {
		event.preventDefault();

		if (
			//trim() to remove spaces at the beginning and the end, I don't need trim() to number's inputs, cause I can't write spaces in it
			enteredUsername.trim().length === 0 ||
			enteredAge.length === 0
		) {
			//I'll return the function and doing it the rest of the code doesn't execute
			return;
		}
		//enteredAge is given in a String, to convert it to a number is just use the + operator in the front of the variable
		if (+enteredAge < 1) {
			return;
		}

		console.log(enteredUsername, enteredAge);
		//to reset the value of age and username after being showed, do this, and add a value to the input
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		// 1- to be able to add classes css in my custom elements I have to enter them and...
		<Card className={classes.input}>
			{/* do not add the parenthesis in here because it would instantly
			execute the function */}
			<form onSubmit={addUserHandler}>
				{/* htmlFor => for assigning that for attribute to a label */}
				<label htmlFor="username">Username</label>
				<input
					id="username"
					type="text"
					onChange={usernameChangeHandler}
					value={enteredUsername}
				/>

				<label htmlFor="age">Age (Years)</label>
				<input
					id="age"
					type="number"
					onChange={ageChangeHandler}
					value={enteredAge}
				/>

				<Button className={classes.button} type="submit">
					Add User
				</Button>
			</form>
		</Card>
	);
};

export default AddUser;
