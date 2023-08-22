import React from 'react'
import styles from './app-header.module.css'
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'


class AppHeader extends React.Component {
	render() {
		return(
			// <div className={`${styles.appHeader} text text_type_main-default`}>app-header</div>
			<header className={`text text_type_main-default`}>
				<ul className={styles.headerList}>
					<li>
						<nav className={styles.menu}>
							<ul>
								<li><a href='#'>
									<BurgerIcon type="primary" />
									<span>Конструктор</span>
									</a>
								</li>
								<li><a href='#'>
									<ListIcon type="primary" />
									<span>Лента заказов</span>
									</a>
								</li>
							</ul>
						</nav>
					</li>
					<li className={styles.logo}><Logo/></li>
					<li>
						<a href='#'>
						<ProfileIcon type="primary" />
						<span>Личный кабинет</span>
						</a>
					</li>
				</ul>
			</header>
		);
	}
}

export default AppHeader;