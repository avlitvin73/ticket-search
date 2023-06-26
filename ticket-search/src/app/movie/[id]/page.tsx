"use client";

import { useSelector } from "react-redux";
import styles from "./page.module.css";
import { Film } from "@/redux/features/films";
import FilmCard from "@/components/FilmCard/FilmCard";

type FilmPageProps = {
  params: { id: string };
};

export default function FilmPage({ params: { id } }: FilmPageProps) {
  const filmList = useSelector((state: any) => state.film.filmList);
  if (filmList.data.length) {
    const film = filmList.data.find((film: Film) => film.id === id);
    if (!film) return <p className={styles.wrapper}>Что-то пошло не так</p>;
    return <FilmCard film={film}></FilmCard>;
  }
  return "Loading";
}
