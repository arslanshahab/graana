import React from "react";
import logo from "./../../assets/images/GraanaLogo.svg";
import { Button } from "../Button/Button";
import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <nav>
      <div className={styles.left_menu}>
        <div className={styles.logo}>
          <img src={logo} alt="" srcset="" />
        </div>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>Buy</li>
          <li className={styles.menu_item}>Sell</li>
          <li className={styles.menu_item}>Rent</li>
          <li className={styles.menu_item}>Invest</li>
        </ul>
      </div>
      <div className={styles.right_menu}>
        <a href="/wanted">Wanted</a>
        <Button title={"Sign In"} size={"md"} type={"primary"} />
      </div>
    </nav>
  );
};
