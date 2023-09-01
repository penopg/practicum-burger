import styles from './burger-ingredients.module.css'
import BurgerTabs from './burger-tabs/burger-tabs'
import BurgerIngredientsSet from '../burger-ingredients/burger-ingredients-set/burger-ingredients-set'
import PropTypes from 'prop-types';
import ingredientDataProps from '../../utils/prop-types'


function BurgerIngredients({ data }) {

	const bunsData = data.filter(function (card) {
		return card.type == "bun"
	})

	const soucesData = data.filter(function (card) {
		return card.type == "sauce"
	})

	const mainsData = data.filter(function (card) {
		return card.type == "main"
	})

	return (
		<section>
			<h1 className='pt-10 pb-5 text text_type_main-large'>Соберите бургер</h1>
			<div className='mb-10'>
				<BurgerTabs />
			</div>
			<div className={styles.burgerSets}>
				<BurgerIngredientsSet key="1" data={bunsData} setName="Булки" />
				<BurgerIngredientsSet key="2" data={soucesData} setName="Соусы" />
				<BurgerIngredientsSet key="3" data={mainsData} setName="Начинки" />
			</div>
		</section>
	);
}

BurgerIngredients.propTypes = {
	data: PropTypes.arrayOf(ingredientDataProps).isRequired
}

export default BurgerIngredients;