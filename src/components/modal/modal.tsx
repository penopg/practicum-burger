import React, { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css'
import ModalOverlay from './modal-overlay'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'


function Modal( {children, header, onClose, isOpen} ) {

	const modalRoot = document.getElementById("modal-container");

	function clickOutside() {
		{onClose()}
	}

	if (!isOpen) return null
	return createPortal(
		(
			<>
				<div className={styles.modal}>
					<div className={`${styles.headerBlock} pt-10 pl-10 pr-10`}>
						<h3> {header} </h3>
						<button onClick={onClose}>
							<CloseIcon type="primary" />
						</button>
					</div>
					
						{children}
				</div>
				<ModalOverlay closeClick={clickOutside}/>
			</>
		),
		modalRoot!
	);

}

export default Modal;
