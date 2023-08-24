import React, {useState} from 'react'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-tabs.module.css'


function BurgerTabs() {
  const [current, setCurrent] = useState('buns');

  return(
    <div className={styles.tabs}>
      <Tab value="buns" active={current === 'buns'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="sauces" active={current === 'sauces'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="mains" active={current === 'mains'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
}

export default BurgerTabs;