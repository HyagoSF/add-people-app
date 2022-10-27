import React from 'react';
import ReactDOM from 'react-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './ErrorModal.module.css';

//Using Portals here, to render the modal above everything on the DOM

const backdropDOM = document.getElementById('backdrop');
const modalOverlayDOM = document.getElementById('modal-overlay');

const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
	return (
		<div>
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{props.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{props.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button onClick={props.onConfirm}>Okay</Button>
				</footer>
			</Card>
		</div>
	);
};

export default function ErrorModal(props) {
	return (
		<div>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={props.onConfirm} />,
				backdropDOM
			)}
			,
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
				/>,
				modalOverlayDOM
			)}
		</div>
	);
}
