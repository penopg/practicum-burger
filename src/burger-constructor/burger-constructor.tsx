import React from 'react'
import styles from './burger-constructor.module.css'
// import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import BurgerTabs from './burger-tabs/burger-tabs'


function BurgerConstructor() {

	// render() {
		return(
			<section>
				<h1 className='pt-10 pb-5 text text_type_main-large'>Соберите бургер</h1>
				<BurgerTabs/>
			</section>
		);
	}
// }

export default BurgerConstructor;