import { FC } from "react";
import styles from "./RemoveButton.module.css";
import Button, { BUTTON_TYPE } from "../Button/Button";

interface IRemoveButton {
  toggleModal: () => void;
}

const RemoveButton: FC<IRemoveButton> = ({ toggleModal }) => {
  return (
    <div className={styles.button}>
      <Button
        icon="/close.svg"
        onClick={toggleModal}
        type={BUTTON_TYPE.DELETE}
      />
    </div>
  );
};

export default RemoveButton;
