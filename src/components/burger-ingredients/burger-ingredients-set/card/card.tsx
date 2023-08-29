import React from 'react'
import styles from './card.module.css'
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';


function Card(props) {

	return (
		<li className={styles.card}>
			<div className='pb-8'>
				<Counter count={0} size="default"/>
				<img src={props.image} alt="" className='ml-4 mr-4'/>
				<div className={styles.price}>
					<p className="text text_type_digits-default">{props.price}</p>
					<CurrencyIcon type='primary'/>
				</div>
				<p className="text text_type_main-default pt-1">{props.name}</p>
			</div>
		</li>
	)

}

Card.propTypes = {
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired
}

export default Card;