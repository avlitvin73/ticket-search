import { selectTicketAmount } from "@/redux/features/cart/selector";
import styles from "./TicketCard.module.css";
import { Film } from "@/redux/features/films";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions, cartReducer } from "@/redux/features/cart";
import Amount from "../Amount/Amount";
import RemoveButton from "../RemoveButton/RemoveButton";

interface ITicketCard {
  film: Film;
  showDeleteButton: boolean;
}

const TicketCard: FC<ITicketCard> = ({ film, showDeleteButton }) => {
  let genre = ''
  if (film.genre === 'action') genre = "Боевик"
  if (film.genre === 'comedy') genre = "Комедия"
  if (film.genre === 'fantasy') genre = "Фэнтези"
  if (film.genre === 'horror') genre = "Ужасы"

  const [showModal, setModalToggle] = useState(false);
  const ticketAmount = useSelector((state) =>
    selectTicketAmount(state, film.id)
  );

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(cartActions.increment(film.id));
  };
  const decrement = () => {
    if (showDeleteButton && ticketAmount === 1) toggleModal();
    else dispatch(cartActions.decrement(film.id));
  };

  const reset = () => {
    dispatch(cartActions.reset(film.id));
  };

  const toggleModal = () => {
    setModalToggle((isOpen) => !isOpen);
  };

  return (
    <div className={styles.container}>
      <Image
        className={styles.img}
        src={film.posterUrl}
        alt="poster"
        width="100"
        height="120"
      />
      <div className={styles.info}>
        <div className={styles.description}>
          <div className={styles.title}>
            <Link href={"/movie/" + film.id}>{film.title}</Link>
          </div>
          <div className={styles.genre}>{genre}</div>
        </div>
        <Amount
          amount={ticketAmount}
          increment={increment}
          decrement={decrement}
        />
        {showDeleteButton && <RemoveButton toggleModal={toggleModal} />}
      </div>
    </div>
  );
};

export default TicketCard;
