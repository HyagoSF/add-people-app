import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = (props) => {
	return (
		<Card className={classes.users}>
			<ul>
				{/* going through every object inside the array of objects(users) and for each user I'll create a list item showing me the name, and the age of it */}
				{props.users.map((user) => (
					<li key={user.id}>
						{user.name} ({user.age} years old)
					</li>
				))}
			</ul>
		</Card>
	);
};

export default UsersList;
