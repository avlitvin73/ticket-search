"use client";

import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Film, fetchFilmList } from "@/redux/features/films";
import { AppStore } from "@/redux/store";
import Sidebar from "@/components/Sidebar/Sidebar";
import TicketList from "@/components/TicketList/TicketList";
import { fetchCinemaList } from "@/redux/features/films copy";

type AppDispatch = AppStore["dispatch"];

const genres = [
  ["action", "Боевик"],
  ["comedy", "Комедия"],
  ["fantasy", "Фэнтези"],
  ["horror", "Ужасы"],
];

export default function Home() {
  const [filmTitle, setFilmTitle] = useState("");
  const [filmGenre, setFilmGenre] = useState("");
  const [filmCinema, setFilmCinema] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const filmList = useSelector((state: any) => state.film.filmList);
  const cinemaList = useSelector((state: any) => state.cinema.cinemaList);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    dispatch(fetchCinemaList());
    dispatch(fetchFilmList("api/movies"));
  }, []);

  useEffect(() => {
    if (filmGenre === "Жанр") {
      setFilmGenre("");
    }
    if (filmCinema === "Кинотеатр") {
      setFilmCinema("");
    }

    if (filmList.data.length)
      setFilms(
        filmList.data.filter((film: Film) => {
          return (
            film.title.toLowerCase().includes(filmTitle.toLowerCase()) &&
            film.genre.toLowerCase().includes(filmGenre.toLowerCase()) 
            && !Boolean(filmCinema && filmCinema.includes(film.id))
          );
        })
      );
  }, [filmTitle, filmGenre, filmCinema]);

  return (
    <main className={styles.main}>
      <Sidebar
        cinemas={cinemaList.status !== "loading" ? cinemaList.data : []}
        genres={genres}
        onChangeTitle={(e) => setFilmTitle(e.target.value)}
        onChangeGenre={(e) => setFilmGenre(e.target.value)}
        onChangeCinema={(e) => setFilmCinema(e.target.value)}
      />
      {filmList.status !== "loading" && filmList.data.length && (
        <TicketList
          mainPage
          filmList={
            filmTitle || filmGenre || filmCinema ? films : filmList.data
          }
        />
      )}
    </main>
  );
}
