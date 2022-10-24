import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

export default function App() {
	//LIFTING THE STATE UP
	const [usersList, setUsersList] = useState([]);

	//function to update the usersList value based on the previous state of it, because this new state DEPENDS of the previous one, the new array will still contain the previous values.
	function addUserHandler(uName, uAge) {
		setUsersList((previousUsersList) => {
			return [
				...previousUsersList,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	}
	return (
		// my enteredUsername in AddUser is my uName(parameter) here on addUserHandler
		// my enteredAge in AddUser is my uAge(parameter) here on addUserHandler
		<div>
			{/* LIFTING THE STATE UP */}
			<AddUser onAddUser={addUserHandler} />

			<UsersList users={usersList} />
		</div>
	);
}
