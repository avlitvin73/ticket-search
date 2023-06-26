import { FC } from "react";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import RemoveButton from "../RemoveButton/RemoveButton";

interface IModal {
  toggleModal: () => void;
}

const Modal: FC<IModal> = ({ toggleModal }) => {
  return (
    <div className={styles.container} onClick={toggleModal}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3 className={styles.title}>Удаление билета</h3>
          <RemoveButton toggleModal={toggleModal} />
        </div>
          <div className={styles.subtitle}>Вы уверены, что хотите удалить билет?</div>
     <div className={styles.buttons}>
        <Button type='text' text='Да'/>
        <Button type='text' onClick={()=>{}} text='Нет'/>
     </div>
      </div>
    </div>
  );
};

export default Modal;
