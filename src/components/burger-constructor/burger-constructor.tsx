import React from 'react'
import styles from './burger-constructor.module.css'
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { data } from '../../utils/data'

function BurgerConstructor() {

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

	const otherConstructorElements = otherElements.map((el) => {
		return(
			<div className={styles.mainElement}>
				<DragIcon type="primary" />
				<ConstructorElement
				  text={ el.name }
				  price={ el.price }
				  thumbnail={ el.image }
				/>
			</div>
		)
	})

	return(
		<section className="mt-25">
			<div className={styles.burgerContent}>
				<div className='pl-8'>
					<ConstructorElement
					  type="top"
					  isLocked={true}
					  text={ bunsData[0].name }
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
					  text={ bunsData[0].name }
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
					>
				  Оформить заказ
				</Button>
			</div>
		</section>
	);
}

export default BurgerConstructor;