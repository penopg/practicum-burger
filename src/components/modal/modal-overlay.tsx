import styles from './modal-overlay.module.css'

export default function ModalOverlay({ closeClick }) {

	function click() {
		{ closeClick() }
	}

	return (
		<div className={styles.overlay} onClick={() => click()}>
		</div>
	)
}