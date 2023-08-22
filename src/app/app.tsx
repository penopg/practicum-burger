import React from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'



function App() {
  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.container}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </main>
    </div>
  );
}

export default App;
