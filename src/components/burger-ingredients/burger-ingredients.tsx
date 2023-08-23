import React from 'react'
import styles from './burger-ingredients.module.css'
// import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerTabs from './burger-tabs/burger-tabs'
import BurgerIngredientsSet from '../burger-ingredients/burger-ingredients-set/burger-ingredients-set'
import { data } from '../../utils/data'

// console.log(data[0]);

function BurgerIngredients() {

	// render() {
		return(
			<section>
				<h1 className='pt-10 pb-5 text text_type_main-large'>Соберите бургер</h1>
				<BurgerTabs/>
				<div className={styles.burgerSets}>
					<BurgerIngredientsSet data={data} setName="Булки"/>
				</div>	
			</section>
		);
	}
// }

export default BurgerIngredients;