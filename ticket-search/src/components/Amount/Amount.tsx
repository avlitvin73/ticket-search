import { FC } from "react";
import styles from "./Amount.module.css";
import Button, { BUTTON_TYPE } from "../Button/Button";

interface IAmount {
  amount: number;
  increment: () => void;
  decrement: () => void;
}

const Amount: FC<IAmount> = ({ amount, increment, decrement }) => {
  return (
    <div className={styles.buttons}>
      <Button type={BUTTON_TYPE.ICON} icon="/minus.svg" onClick={decrement} />
      {amount}
      <Button type={BUTTON_TYPE.ICON} icon="/plus.svg" onClick={increment} />
    </div>
  );
};

export default Amount;
