import React from 'react';
import { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './UserInput.module.css';
import ErrorModal from '../UI/ErrorModal';

//in comments are all the steps of doing using useState instead of doing with useRef

export default function UserInput(props) {
	// const [enteredUsername, setEnteredUsername] = useState('');
	// const [enteredAge, setEnteredAge] = useState('');
	const [error, setError] = useState();

	//Creating my Ref's
	const enteredUsername = useRef();
	const enteredAge = useRef();

	const formSubmitHandler = (event) => {
		event.preventDefault();

		//and here when I submit my form I'll create these 2 variables that holds the input values
		const enteredName = enteredUsername.current.value;
		const enteredUserAge = enteredAge.current.value;

		if (
			enteredName.trim().length === 0 ||
			enteredUserAge.trim().length === 0
		) {
			setError({
				title: 'Username error',
				message: 'Please fill correctly the Username and the age',
			});
			return;
		}

		if (enteredUserAge < 0) {
			setError({
				title: 'Age error',
				message: 'Please enter a age bigger than 0',
			});
			return;
		}

		//and I'll pass those values to my app render there on UsersList
		props.onAddUser(enteredName, enteredUserAge);

		// setEnteredAge('');
		// setEnteredUsername('');
	};

	// const usernameInputChangeHandler = (event) => {
	// 	setEnteredUsername(event.target.value);
	// };

	// const ageInputChangeHandler = (event) => {
	// 	setEnteredAge(event.target.value);
	// };

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
						id="username"
						// onChange={usernameInputChangeHandler}
						// value={enteredUsername}
						ref={enteredUsername}
					/>

					<label>Age (years)</label>
					<input
						type="number"
						id="age"
						// onChange={ageInputChangeHandler}
						// value={enteredAge}
						ref={enteredAge}
					/>

					<Button className={classes.button}>Add User</Button>
				</form>
			</Card>
		</React.Fragment>
	);
}
