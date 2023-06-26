import { Film } from "@/redux/features/films";
import { FC } from "react";
import TicketCard from "../TicketCard/TicketCard";

interface ITicketList {
  filmList: Film[];
  mainPage: boolean
}

const TicketList: FC<ITicketList> = ({ filmList, mainPage }) => {
  return (
    <div>
      {filmList.map((film: Film) => (
        <TicketCard key={film.id} film={film} showDeleteButton={mainPage}/>
      ))}
    </div>
  );
};

export default TicketList;
