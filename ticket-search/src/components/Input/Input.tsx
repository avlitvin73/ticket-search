import { ChangeEvent, FC } from "react";
import styles from "./Input.module.css";

interface IInput {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInput> = ({ onChange }) => {
  return (
    <input
      onChange={(e) => {
        onChange(e)
      }}
      className={styles.filter}
      placeholder="Введите название"
    />
  );
};

export default Input;
