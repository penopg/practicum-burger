import React, { useEffect, useState } from 'react'
import styles from './ingredient-details.module.css'
// import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'


export default function IngredientDetails({ data }) {

	return(
		<div className={`${styles.ingredientDetails} pl-20 pr-20`}>
			<img src={data.image_large} alt=""/>
			<p className="text text_type_main-medium pt-4">{data.name}</p>
			<ul className={`${styles.details} mt-8 mb-15`}>
				<li className="text text_type_main-default text_color_inactive">
					<p >Калории, ккал</p>
					<p className="text text_type_digits-default">{data.calories}</p>
				</li>
				<li className="text text_type_main-default text_color_inactive">
					<p>Белки, г</p>
					<p className="text text_type_digits-default">{data.proteins}</p>
				</li>
				<li className="text text_type_main-default text_color_inactive">
					<p>Жиры, г</p>
					<p className="text text_type_digits-default">{data.fat}</p>
				</li>
				<li className="text text_type_main-default text_color_inactive">
					<p>Углеводы, г</p>
					<p className="text text_type_digits-default">{data.carbohydrates}</p>
				</li>
			</ul>
		</div>
	)
}

