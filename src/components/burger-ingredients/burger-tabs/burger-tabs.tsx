import React, {useState} from 'react'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

// class BurgerTabs extends React.Component {

  
  
  // render() {

function BurgerTabs() {
  const [current, setCurrent] = useState('buns');

  return(
    <div style={{ display: 'flex' }}>
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

  // return (
  //   <>
  //   </>
  // )

export default BurgerTabs;