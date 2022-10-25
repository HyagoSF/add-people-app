import React from 'react';
import classes from './ErrorModal.module.css';
import Button from './Button';
import Card from './Card';

//a MODAL window is a graphical control element subordinate to an application's main window
export default function ErrorModal(props) {
	return (
		<div>
			<div className={classes.backdrop} onClick={props.onOkay} />
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={props.onOkay}>Ok</Button>
				</footer>
			</Card>
		</div>
	);
}
