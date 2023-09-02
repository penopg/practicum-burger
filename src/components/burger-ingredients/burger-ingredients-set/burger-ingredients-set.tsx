import styles from "./burger-ingredients-set.module.css";
import PropTypes from "prop-types";
import Card from "./card/card";
import ingredientDataProps from "../../../utils/prop-types";

function BurgerIngredientsSet(props) {
  const cards = props.data.map((card) => {
    return <Card {...card} key={card._id}></Card>;
  });

  return (
    <div className={styles.set}>
      <h2 className="text text_type_main-medium">{props.setName}</h2>
      <ul className={styles.cards}>{cards}</ul>
    </div>
  );
}

BurgerIngredientsSet.propTypes = {
  setName: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(ingredientDataProps).isRequired,
};

export default BurgerIngredientsSet;
