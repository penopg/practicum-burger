import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './burger-constructor.module.css'
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/modal'
import OrderDetails from './order-details/order-details'
import ingredientDataProps from '../../utils/prop-types'


function BurgerConstructor({data}) {

	const [isOpen, setIsOpen] = useState(false);

	const bunsData = data.filter(function(card) {
    	return card.type == "bun"
	})

	const otherData = data.filter(function(card) {
    	return card.type != "bun"
	})
	
	// Наполним рандомными элементами центральную часть бургера
	const elementsNum = 8; 
	let otherElements = new Array;	
	for (let i = 0; i < elementsNum; i++) {
		otherElements.push(otherData[Math.floor(Math.random()*otherData.length)]);
	}

	const otherConstructorElements = otherElements.map((el, index) => {
		return(
			<div className={styles.mainElement} key={ index }>
				<DragIcon type="primary" />
				<ConstructorElement
				  text={ el.name }
				  price={ el.price }
				  thumbnail={ el.image }
				/>
			</div>
		)
	})

	const modal = (
		<Modal 
			header="" 
			onClose={() => setIsOpen(false)}
			isOpen={isOpen}
			>
			<OrderDetails/>
		</Modal>
	)

	return(
		<section className="mt-25">
			<div className={styles.burgerContent}>
				<div className='pl-8'>
					<ConstructorElement
					  type="top"
					  isLocked={true}
					  text={ bunsData[0].name + " (верх)" }
					  price={ bunsData[0].price }
					  thumbnail={ bunsData[0].image }
					/>
				</div>
				<div className={styles.mainElements}>
					{otherConstructorElements}										
				</div>
				<div className='pl-8'>
					<ConstructorElement
					  type="bottom"
					  isLocked={true}
					  text={ bunsData[0].name + " (низ)"}
					  price={ bunsData[0].price }
					  thumbnail={ bunsData[0].image }
					/>	
				</div>						
			</div>
			<div className={`${styles.order} mt-10 mr-8`} >
				<span className="text text_type_digits-medium mr-4">610</span>
				<CurrencyIcon type="primary" />
				<Button 
					htmlType="button" 
					type="primary" 
					size="large"
					extraClass="ml-10"
					onClick={() => setIsOpen(true)}
					>
				  Оформить заказ
				</Button>
				{isOpen && modal}
			</div>
		</section>
	);
}

BurgerConstructor.propTypes = {
	data: PropTypes.arrayOf(ingredientDataProps).isRequired
}

export default BurgerConstructor;