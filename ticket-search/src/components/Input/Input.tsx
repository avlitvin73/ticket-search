import { ChangeEvent, FC } from "react";
import styles from "./Input.module.css";

interface IInput {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInput> = ({ label, onChange }) => {
  return (
    <>
      <label className={styles.label}>{label}</label>

      <input 
        onChange={(e) => {
          onChange(e);
        }}
        className={styles.filter}
        placeholder="Введите название"
      />
    </>
  );
};

export default Input;
