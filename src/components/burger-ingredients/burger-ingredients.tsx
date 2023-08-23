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
			<BurgerTabs/>
			<div className={styles.burgerSets}>
				<BurgerIngredientsSet data={bunsData} setName="Булки"/>
				<BurgerIngredientsSet data={soucesData} setName="Соусы"/>
				<BurgerIngredientsSet data={mainsData} setName="Начинки"/>
			</div>	
		</section>
	);
}

export default BurgerIngredients;