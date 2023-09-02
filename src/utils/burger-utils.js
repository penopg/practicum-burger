const NORMA_API = "https://norma.nomoreparties.space/api";

export const getIngredients = () => fetch(`${NORMA_API}/ingredients`);
