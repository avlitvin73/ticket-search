"use client";

import Modal from "@/components/Modal/Modal";
import styles from "./page.module.css";

import TicketList from "@/components/TicketList/TicketList";
import { selectCartModule } from "@/redux/features/cart/selector";
import { Film } from "@/redux/features/films";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function CartPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [films, setFilms] = useState([]);
  const { push } = useRouter();

  const filmList = useSelector((state: any) => state.film.filmList);
  const cart = useSelector((state) => selectCartModule(state));

  const toggleModal = () => {
    setIsModalOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    if (cart.amount) {
      setFilms(
        filmList.data.filter((film: Film) => {
          return JSON.stringify(cart).includes(film.id);
        })
      );
    }
  }, [cart]);

  if (!cart.amount) {
    push("/");
  }

  return (
    <>
      <div className={`${styles.container} ${isModalOpen? 'modal': ''}`}>
        <TicketList mainPage={false} marginLeft={1.5} filmList={films} toggleModal={toggleModal}/>
        <div className={styles.total}>
          <div className={styles.title}>Итого билетов:</div>
          <div className={styles.amount}>{cart.amount}</div>
        </div>
      </div>
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </>
  );
}
