import { Film } from "@/redux/features/films";
import { FC } from "react";
import TicketCard from "../TicketCard/TicketCard";
import styles from "./TicketList.module.css";

interface ITicketList {
  filmList: Film[];
  mainPage: boolean;
}

const TicketList: FC<ITicketList> = ({ filmList, mainPage }) => {
  return (
    <div className={styles.container}>
      {filmList.map((film: Film) => (
        <TicketCard
          key={film.id}
          film={film}
          showDeleteButton={!Boolean(mainPage)}
        />
      ))}
    </div>
  );
};

export default TicketList;
