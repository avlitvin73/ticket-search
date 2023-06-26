import { FC } from "react";
import styles from "./Button.module.css";
import Image from "next/image";

export const enum BUTTON_TYPE {
  ICON,
  TEXT,
  DELETE,
}

interface IButton {
  type: BUTTON_TYPE;
  disable?: boolean;
  icon?: string;
  text?: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ type, icon, disable,  text, onClick }) => {
  let buttonClass;
  if (type === BUTTON_TYPE.DELETE) {
    buttonClass = styles.deleteButton;
  } else if (type === BUTTON_TYPE.ICON) {
    buttonClass = styles.iconButton;
  } else if (type === BUTTON_TYPE.TEXT) {
    buttonClass = styles.textButton;
  }
  return (
    <button className={`${styles.button} ${buttonClass}`} disabled={disable} onClick={onClick}>
      {icon ? <Image src={icon} alt="" width="12" height="12" /> : text || ""}
    </button>
  );
};

export default Button;
