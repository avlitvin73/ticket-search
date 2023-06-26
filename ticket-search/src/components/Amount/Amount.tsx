import { FC } from "react";
import styles from "./Amount.module.css";
import Button from "../Button/Button";

interface IAmount {
  amount: number;
  increment: () => void;
  decrement: () => void;
}

const Amount: FC<IAmount> = ({ amount, increment, decrement }) => {
  return (
    <div className={styles.buttons}>
      <Button
        type={'icon'}
        icon="/minus.svg"
        disable={!Boolean(amount)}
        onClick={decrement}
      />
      {amount}
      <Button
        type={'icon'}
        icon="/plus.svg"
        disable={amount >= 30}
        onClick={increment}
      />
    </div>
  );
};

export default Amount;
