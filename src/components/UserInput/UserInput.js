import React from 'react';
import { useState } from 'react';
// import styled from 'styled-components';

// const FormControl = styled.div`
// 	margin: 0.5rem 0;

// 	& label {
// 		font-weight: bold;
// 		display: block;
// 		margin-bottom: 0.5rem;
// 	}

// 	& input {
// 		display: block;
// 		width: 100%;
// 		border: 1px solid #ccc;
// 		font: inherit;
// 		line-height: 1.5rem;
// 		padding: 0 0.25rem;
// 	}

// 	& input:focus {
// 		outline: none;
// 		background: #fad0ec;
// 		border-color: #8b005d;
// 	}

// 	/* if there is invalid in my form-control, then I can target my input */
// 	&.invalid input {
// 		border-color: red;
// 		background-color: rgb(224, 148, 140);
// 	}

// 	&.invalid label {
// 		color: red;
// 	}
// `;

export default function UserInput(props) {
	const [enteredUsername, setEnteredUsername] = useState('');
	const [enteredAge, setEnteredAge] = useState('');
	// const [isValid, setIsValid] = useState(true);

	const usernameInputChangeHandler = (event) => {
		// console.log(event.target.value);
		setEnteredUsername(event.target.value);
	};
    
	const ageInputChangeHandler = (event) => {
        setEnteredAge(event.target.value);
        // console.log(event.target.value);

	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		props.onAddUsername(enteredUsername);
		props.onAddAge(enteredAge);
	};

	return (
		<form onSubmit={formSubmitHandler}>
			{/* <FormControl className={!isValid && 'invalid'}> */}
			<label>Username</label>
			<input
				type="text"
				onChange={usernameInputChangeHandler}
				id="username"
			/>
			{/* </FormControl> */}

			<label>Age (years)</label>
			<input type="number" onChange={ageInputChangeHandler} id="age" />

            <button>Submit</button>
		</form>
	);
}
