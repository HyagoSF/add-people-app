import React from 'react';
import UserInfo from '../UserInfo/UserInfo.js';

const UserList = (props) => {
	//props.items //my list of profiles
	return (
		<ul className="">
			{props.items.map((user) => (
				<UserInfo
					key={user.id}
					username={user.username}
					age={user.age}>
					{user.username} ({user.age} years old)
				</UserInfo>
			))}
		</ul>
	);
};

export default UserList;
