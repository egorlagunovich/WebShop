import styles from "./Header.module.css";
import React from "react";
import logo from "./../../images/logo.png";
import dollarPhoto from "./../../images/dollar.png";
import car from "./../../images/car.png";
import scissors from "./../../images/scissors.png";
import busket from "./../../images/busket.png";
import search from "./../../images/search.png";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="shoplogo" />
        <h1>ROPP</h1>
      </div>
      <div className={styles.searchMenu}>
        <div className={styles.iconsPluses}>
          <div className={styles.icons}>
            <img src={dollarPhoto} alt="dollar" />
            <p>Возврат в течении 30 дней</p>
          </div>
          <div className={styles.icons}>
            <img src={car} alt="car" />
            <p>Бесплатная доставка</p>
          </div>
          <div className={styles.icons}>
            <img src={scissors} alt="dollar" />
            <p>Купон на 3000 руб. каждому</p>
          </div>
        </div>
        <div className={styles.search}>
          <input type="text" className={styles.searchInput}/>
          <button className={styles.searchBut}>
            <img src={search} alt="searchIcon" />
          </button>
        </div>
      </div>
      <div className={styles.busket}>
        <img src={busket} alt="busket" />
        <div>
          <p>Товаров:</p>
          <p>Сумма:</p>
        </div>
      </div>
    </header>
  );
}
