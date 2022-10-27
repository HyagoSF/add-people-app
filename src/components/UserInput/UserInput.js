import React from 'react';
import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './UserInput.module.css';
import ErrorModal from '../UI/ErrorModal';

export default function UserInput(props) {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			setError({
				title: 'Username error',
				message: 'Please fill correctly the Username and the age',
			});
			return;
		}

		if (enteredAge < 0) {
			setError({
				title: 'Age error',
				message: 'Please enter a age bigger than 0',
			});
			return;
		}

		props.onAddUser(enteredUsername, enteredAge);

		setEnteredAge('');
		setEnteredUsername('');
	};

	const usernameInputChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageInputChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const ErrorHandler = () => {
		setError(null);
	};

	return (
		<React.Fragment>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={ErrorHandler}
				/>
			)}

			<Card className={classes.input}>
				<form onSubmit={formSubmitHandler}>
					<label>Username</label>
					<input
						type="text"
						onChange={usernameInputChangeHandler}
						id="username"
						value={enteredUsername}
					/>

					<label>Age (years)</label>
					<input
						type="number"
						onChange={ageInputChangeHandler}
						id="age"
						value={enteredAge}
					/>

					<Button className={classes.button}>Add User</Button>
				</form>
			</Card>
		</React.Fragment>
	);
}
