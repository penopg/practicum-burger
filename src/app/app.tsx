import React from 'react';
import './app.css';
import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'



function app() {
  return (
    <div className="app">
      <AppHeader/>
      <BurgerConstructor/>
      <BurgerIngredients/>
    </div>
  );
}

export default app;
