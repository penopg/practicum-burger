import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css'
import ModalOverlay from './modal-overlay'
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'


function Modal( {children, header} ) {

	const modalRoot = document.getElementById("modal-container");


	return createPortal(
		(
			<>
				<div className={styles.modal}>
				<div className={`${styles.headerBlock} pt-10 pl-10 pr-10`}>
					<h3> {header} </h3>
					<CloseIcon type="primary" />
				</div>
				
					{children}
				</div>
				<ModalOverlay/>
			</>
		),
		modalRoot!
	);

}

export default Modal;
