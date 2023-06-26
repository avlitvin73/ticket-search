import { Film } from "@/redux/features/films";
import { FC, useState } from "react";

interface ITicketCard {
  film: Film
}

const TicketCard: FC<ITicketCard> = ({film}) => {
  const [showModal, setShowModal] = useState(false);

  return <div>TicketCard</div>;
};

export default TicketCard;
