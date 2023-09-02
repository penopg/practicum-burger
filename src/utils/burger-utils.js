const NORMA_API = "https://norma.nomoreparties.space/api";

export const getIngredients = () => fetch(`${NORMA_API}/ingredients`)
  .then(resp => {
      if (!resp.ok) {
        return Promise.reject;
      }
      return resp.json();
    })

