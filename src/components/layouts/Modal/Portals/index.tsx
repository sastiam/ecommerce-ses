import { FC }  from 'react';
import { createPortal } from 'react-dom';

const modal_dom = document.getElementById('modals');

const Modal : FC = ({ children }) => createPortal(
	children,
	modal_dom!
);

export default Modal;