import React from 'react'
import styles from './burger-ingredients-set.module.css'
import PropTypes from 'prop-types';
import Card from './card/card'


function BurgerIngredientsSet(props) {

	const cards = props.data.map((card) => {
		return (<Card {...card} key={card._id}></Card>);
	})

	return(
		<div className={styles.set}>
			<h2 className="text text_type_main-medium">{props.setName}</h2>
			<ul className={styles.cards}>
			{cards}
		
			</ul>		
		</div>
		)
}

BurgerIngredientsSet.propTypes = {
	setName: PropTypes.string,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			_id: PropTypes.string,
			name: PropTypes.string,
			type: PropTypes.string,
			proteins: PropTypes.number,
			fat: PropTypes.number,
			carbohydrates: PropTypes.number,
			calories: PropTypes.number,
			price: PropTypes.number,
			image: PropTypes.string,
			image_mobile: PropTypes.string,
			image_large: PropTypes.string,
			__v: PropTypes.number
	}))
}

export default BurgerIngredientsSet;