import React from 'react';
import UserInput from './components/UserInput/UserInput';
import UsersList from './components/UserList/UsersList';
import { useState } from 'react';

export default function App() {
	const [usersProfile, setUserProfile] = useState([]);

	function onAddUserHandler(uName, uAge) {
		setUserProfile((previousState) => {
			return [
				...previousState,
				{ name: uName, age: uAge, id: Math.random().toString() },
			];
		});
	}

	function onRemoveUserHandler(id) {
		setUserProfile(
			usersProfile.filter((user) => {
				return user.id !== id;
			})
		);
	}

	return (
		<>
			<UserInput onAddUser={onAddUserHandler} />
			<UsersList
				users={usersProfile}
				onRemoveUser={onRemoveUserHandler}
			/>
		</>
	);
}
