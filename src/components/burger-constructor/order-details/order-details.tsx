import React, { useEffect, useState } from "react";
import styles from "./order-details.module.css";
import doneIcon from "./doneIcon.png";
// import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'

export default function OrderDetails() {
  const orderSum = "350 063";

  return (
    <div className={styles.orderDetails}>
      <p className={`${styles.orderSum} text text_type_digits-large pt-10`}>
        {orderSum}
      </p>
      <p className="text text_type_main-medium pt-8">идентификатор заказа</p>
      <img className="pt-15 pb-15" src={doneIcon} />
      <p className="text text_type_main-default">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive pt-2 pb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
