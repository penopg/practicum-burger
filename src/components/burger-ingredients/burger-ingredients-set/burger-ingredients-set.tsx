import React from 'react'
import styles from './burger-ingredients-set.module.css'

import Card from './card/card'

interface CardProps {
	_id: string,
	name: string,
	type: string,
	proteins: number,
	fat: number,
	carbohydrates: number,
	calories: number,
	price: number,
	image: string,
	image_mobile: string,
	image_large: string,
	__v: number
}

function BurgerIngredientsSet(props) {

	const cards = props.data.map((card) => {
		return (<Card {...card} key={card._id}></Card>);
	})

	return(
		<div className={styles.set}>
			<h2 className="text text_type_main-medium pt-10">{props.setName}</h2>
			<ul className={styles.cards}>
			{cards}
		
			</ul>		
		</div>
		)
}

export default BurgerIngredientsSet;