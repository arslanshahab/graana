import React from "react";
import logo from "./../../assets/images/GraanaLogo.svg";
import { Button } from "../Button/Button";
import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <nav>
      <div className={styles["left-menu"]}>
        <div className={styles.logo}>
          <img src={logo} alt="" srcset="" />
        </div>
        <ul className={styles.menu}>
          <li className={styles["menu-item"]}>Buy</li>
          <li className={styles["menu-item"]}>Sell</li>
          <li className={styles["menu-item"]}>Rent</li>
          <li className={styles["menu-item"]}>Invest</li>
        </ul>
      </div>
      <div className={styles["right-menu"]}>
        <a href="/wanted">Wanted</a>
        <Button title={"Sign In"} size={"lg"} type={"primary"} />
      </div>
    </nav>
  );
};
