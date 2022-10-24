import React from 'react';
import { useState } from 'react';

export default function UserInput(props) {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	// const [isValid, setIsValid] = useState(true);

	const formSubmitHandler = (event) => {
		event.preventDefault();

		if (
			enteredUsername.trim().length === 0 ||
			enteredAge.trim().length === 0
		) {
			return;
		}

		if (enteredAge < 0) {
			return;
		}

		props.onAddUser(enteredUsername, enteredAge);
	};

	const usernameInputChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageInputChangeHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<label>Username</label>
			<input
				type="text"
				onChange={usernameInputChangeHandler}
				id="username"
			/>

			<label>Age (years)</label>
			<input type="number" onChange={ageInputChangeHandler} id="age" />

			<button>Submit</button>
		</form>
	);
}
