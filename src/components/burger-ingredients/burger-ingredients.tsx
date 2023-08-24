import React from 'react'
import styles from './burger-ingredients.module.css'
// import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerTabs from './burger-tabs/burger-tabs'
import BurgerIngredientsSet from '../burger-ingredients/burger-ingredients-set/burger-ingredients-set'
import { data } from '../../utils/data'


function BurgerIngredients() {

	const bunsData = data.filter(function(card) {
    	return card.type == "bun"
	})

	const soucesData = data.filter(function(card) {
    	return card.type == "sauce"
	})

	const mainsData = data.filter(function(card) {
    	return card.type == "main"
	})

	return(
		<section>
			<h1 className='pt-10 pb-5 text text_type_main-large'>Соберите бургер</h1>
			<div className='mb-10'>
			<BurgerTabs/>				
			</div>
			<div className={styles.burgerSets}>
				<BurgerIngredientsSet key="1" data={bunsData} setName="Булки"/>
				<BurgerIngredientsSet key="2" data={soucesData} setName="Соусы"/>
				<BurgerIngredientsSet key="3" data={mainsData} setName="Начинки"/>
			</div>	
		</section>
	);
}

export default BurgerIngredients;