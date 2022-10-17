import React from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';
import { useState } from 'react';

export default function App() {
	const [userProfile, setUserProfile] = useState([
		{ username: 'Pedro', age: '18', id: 'u1' },
		{ username: 'Joao', age: '22', id: 'u2' },
		{ username: 'Eliezer', age: '38', id: 'u3' },
	]);

	// function addUsernameHandler(enteredValue) {
	// 	setUserProfile((prevUser) => {
	// 		const updateUsers = [...prevUser];
	// 		updateUsers.unshift({
	// 			username: enteredValue,
	// 		});
	// 		return updateUsers;
	// 	});
	// }

	// function addAgeHandler(enteredValue) {
	// 	setUserProfile((prevUser) => {
	// 		const updateUsers = [...prevUser];
	// 		updateUsers.unshift({
	// 			age: enteredValue,
	// 		});
	// 		return updateUsers;
	// 	});
	// }

	let content = <p>None user's found.</p>;

	if (userProfile.length > 0) {
		content = <UserList items={userProfile} />;
	}

	return (
		<div>
			<section>
				<UserInput
					onAddUsername={addUsernameHandler}
					onAddAge={addAgeHandler}
				/>
			</section>
			<section>{content}</section>
		</div>
	);
}
