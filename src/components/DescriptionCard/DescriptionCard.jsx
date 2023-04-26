import React from "react";
import styles from "./styles.module.scss";
import { Title } from "../Title/Title";
import { Description } from "../Description/Description";
import { Button } from "../Button/Button";

export const DescriptionCard = ({
  image,
  title,
  description,
  btnTitle,
  btnVariant,
  btnType = "secondary",
}) => {
  return (
    <div className={styles.description_card}>
      <img src={image} alt="invest graphics" />
      <Title text={title} />
      <Description text={description} />
      <Button
        title={btnTitle}
        size={"sm"}
        type={btnType}
        variant={btnVariant}
      />
    </div>
  );
};
