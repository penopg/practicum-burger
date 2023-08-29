import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'




function App() {

  const DATA_SOURCE = 'https://norma.nomoreparties.space/api/ingredients';

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    fetch(DATA_SOURCE)
    .then((response) => {
      if (!response.ok) {throw new Error(`${response.status}`)}
      return response.json(); 
    })
    .then((data) => {
      setData(data.data);
      setError(null);
    })
    .catch((err) => {
      setError(err.message);
      setData(null);
    })
    .finally(() => {
      setLoading(false);
    })
  }, []);

  // const fetchJson = async (url) => {
  //   const response = await fetch(url);
  //   return response.json();
  // };

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetchJson("https://norma.nomoreparties.space/api/ingredients")
  //     .then(({ data }) => setData(data));
  // }, []);



  return (
    <div className={styles.app}>
      <AppHeader/>
      <main className={styles.container}>
        {loading && <div>Загружаем данные...</div>}
        {error && (
          <div>{`У нас проблема с загрузкой данных :( Ошибка ${error}`}</div>
        )}
        {
          data && 
          <>
            <BurgerIngredients data={data}/>
            <BurgerConstructor data={data}/>
          </>
        }
      </main>
    </div>
  );
}

export default App;
