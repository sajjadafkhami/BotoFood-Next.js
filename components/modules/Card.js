import LinK from "next/linK"

import styles from "./Card.module.css";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";


function Card({ id, name, price, details, discount }) {
  return (
    <div className={styles.container}>
      <img src={`/images/${id}.jpeg`} alt={name} />
      <div className={styles.details}>
        <h4>{name}</h4>
        <div>
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className={styles.price}>
        <Dollar />
        {discount ? (
          <span className={styles.discount}>
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? <div className={styles.badge}>{discount}%</div> : null}
      </div>
      <LinK href={`/menu/${id}`}>See Details</LinK>
    </div>
  );
}

export default Card;
