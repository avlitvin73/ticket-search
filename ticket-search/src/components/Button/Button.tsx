import { FC } from "react";
import styles from "./Button.module.css";
import Image from "next/image";

interface IButton {
  type: string;
  disable?: boolean;
  icon?: string;
  text?: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ type, icon, disable,  text, onClick }) => {
  return (
    <button className={`${styles.button} ${type}`} disabled={disable} onClick={onClick}>
      {icon ? <Image src={icon} alt="" width="12" height="12" /> : text || ""}
    </button>
  );
};

export default Button;
