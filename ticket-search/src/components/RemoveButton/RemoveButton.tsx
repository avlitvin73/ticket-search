import { FC } from "react";
import styles from "./RemoveButton.module.css";
import Button from "../Button/Button";

interface IRemoveButton {
  toggleModal: () => void;
}

const RemoveButton: FC<IRemoveButton> = ({ toggleModal }) => {
  return (
    <div className={styles.button}>
      <Button
        icon="/delete.svg"
        onClick={toggleModal}
        type={'delete'}
      />
    </div>
  );
};

export default RemoveButton;
