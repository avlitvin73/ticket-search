import { Film } from "@/redux/features/films";
import { FC } from "react";
import TicketCard from "../TicketCard/TicketCard";
import styles from "./TicketList.module.css";

interface ITicketList {
  filmList: Film[];
  mainPage: boolean;
  marginLeft: number;
  toggleModal?: () => void
}

const TicketList: FC<ITicketList> = ({ filmList, mainPage, marginLeft, toggleModal }) => {
  return (
    <div
      className={styles.container}
      style={{
        marginLeft: `${marginLeft}rem`,
      }}
    >
      {filmList.map((film: Film) => (
        <TicketCard
          key={film.id}
          film={film}
          showDeleteButton={!Boolean(mainPage)}
          toggleModal={toggleModal}
        />
      ))}
    </div>
  );
};

export default TicketList;
