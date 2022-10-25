import { React, useState } from 'react';

import classes from './AddUser.module.css';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();

		if (
			//trim() to remove spaces at the beginning and the end, I don't need trim() to number's inputs, cause I can't write spaces in it
			enteredUsername.trim().length === 0 ||
			enteredAge.length === 0
		) {
			// I'm gonna set the error JUST if
			setError({
				title: 'Invalid Input',
				message:
					'Please set a valid Username and age correctly, no empty boxes',
			});
			//I'll return the function and doing it the rest of the code doesn't execute
			return;
		}
		//enteredAge is given in a String, to convert it to a number is just use the + operator in the front of the variable
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid Age',
				message: 'Please enter a valid age ( > 0)',
			});
			return;
		}

		//to pass the actual username and the current age to props.onAddUser(this is a function on the parent component, a function that accepts 2 parameters)
		props.onAddUser(enteredUsername, enteredAge);

		//to reset the value after being showed, additionally add a `value` property to the input
		setEnteredUsername('');
		setEnteredAge('');
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const ErrorHandler = () => {
		setError(null);
	};

	return (
		// 1- to be able to add classes css in my custom elements I have to
		// enter them and...
		<div>
			{/* if there is an error, render the ErrorModal */}
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onOkay={ErrorHandler}
				/>
			)}
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
		</div>
	);
};

export default AddUser;
