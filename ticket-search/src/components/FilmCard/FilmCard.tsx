import { Film } from "@/redux/features/films";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styles from "./FilmCard.module.css";
import Amount from "../Amount/Amount";
import { useDispatch, useSelector } from "react-redux";
import { selectTicketAmount } from "@/redux/features/cart/selector";
import { cartActions } from "@/redux/features/cart";
import axios from "axios";

interface IFilmCard {
  film: Film;
}

export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;
};

const FilmCard: FC<IFilmCard> = ({ film }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const apiUrl = `http://localhost:3001/api/reviews?movieId=${film.id}`;
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setReviews(allPersons);
    });
  }, []);

  let genre = "";
  if (film.genre === "action") genre = "Боевик";
  if (film.genre === "comedy") genre = "Комедия";
  if (film.genre === "fantasy") genre = "Фэнтези";
  if (film.genre === "horror") genre = "Ужасы";

  const ticketAmount = useSelector((state) =>
    selectTicketAmount(state, film.id)
  );
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(cartActions.increment(film.id));
  };
  const decrement = () => {
    dispatch(cartActions.decrement(film.id));
  };

  return (
    <>
      <div className={styles.container}>
        <Image
          className={styles.img}
          src={film.posterUrl}
          alt="poster"
          width={400}
          height={500}
        />
        <div className={styles.info}>
          <div className={styles.facts}>
            <h2 className={styles.title}>{film.title}</h2>
            <div className={styles.parameters}>
              <div className={styles.parameter}>
                <h3 className={styles.part}>Жанр:</h3>
                <div className={styles.value}>{genre}</div>
              </div>
              <div className={styles.parameter}>
                <h3 className={styles.part}>Год выпуска:</h3>
                <div className={styles.value}>{film.releaseYear}</div>
              </div>
              <div className={styles.parameter}>
                <h3 className={styles.part}>Рейтинг:</h3>
                <div className={styles.value}>{film.rating}</div>
              </div>
              <div className={styles.parameter}>
                <h3 className={styles.part}>Режиссер:</h3>
                <div className={styles.value}>{film.director}</div>
              </div>
            </div>
          </div>
          <Amount
            amount={ticketAmount}
            increment={increment}
            decrement={decrement}
          />
          <div className={styles.text}>
            <h3 className={styles.destitle}>Описание</h3>
            <div className={styles.description}> {film.description}</div>
          </div>
        </div>
      </div>
      <div className={styles.reviews}>


      {!!reviews.length &&
        reviews.map((review: Review) => (
          <div key={review.id} className={styles.review}>
            <Image
              className={styles.reviewimg}
              src="/user.png"
              alt="user"
              width={100}
              height={100}
            />
            <div className={styles.reviewtext}>
              <div className={styles.reviewheader}>
                <h3 className={styles.reviewtitle}>{review.name}</h3>
                <div className={styles.score}>
                  <div>Оценка:</div>
                  <div className={styles.rating}>{review.rating}</div>
                </div>
              </div>
              <div className={styles.reviewcontent}>{review.text}</div>
            </div>
          </div>
        ))}
              </div>
      {console.log("reviews", reviews)}
    </>
  );
};

export default FilmCard;
