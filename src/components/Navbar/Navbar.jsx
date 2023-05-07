import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../assets/images/GraanaLogo.svg";
import styles from "./styles.module.scss";
import LoginForm from "../loginForm/LoginForm";

export const Navbar = () => {
  return (
    <nav>
      <div className={styles.left_menu}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <Link to="/buy">Buy</Link>
          </li>
          <li className={styles.menu_item}>
            <Link to="/sell">Sell</Link>
          </li>
          <li className={styles.menu_item}>
            <Link to="/rent">Rent</Link>
          </li>
          <li className={styles.menu_item}>
            <Link to="/invest">Invest</Link>
          </li>
        </ul>
      </div>
      <div className={styles.right_menu}>
        <a href="/wanted">Wanted</a>
          <LoginForm/>
      </div>
    </nav>
  );
};
