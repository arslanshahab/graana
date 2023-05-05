import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import logo from "./../../assets/images/GraanaLogo.svg";
import { Button } from "../Button/Button";
import styles from "./styles.module.scss";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const Navbar = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <nav>
      <div className={styles.left_menu}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className={styles.menu}>
          <li className={styles.menu_item}>
            <Link to="/sale">Buy</Link>
          </li>
          <li className={styles.menu_item}>Sell</li>
          <li className={styles.menu_item}>Rent</li>
          <li className={styles.menu_item}>Invest</li>
        </ul>
      </div>
      <div className={styles.right_menu}>
        <a href="/wanted">Wanted</a>
        <Button
          title={"Sign In"}
          size={"md"}
          type={"primary"}
          onClick={openModal}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 className={"title"}>Login Form</h1>
        <input type="text" placeholder="Enter Email" />
        <br />
        <br />
        <input type="password" placeholder="Enter Password" />
        <br />
        <br />
        <Button title="Login" />
      </Modal>
    </nav>
  );
};
