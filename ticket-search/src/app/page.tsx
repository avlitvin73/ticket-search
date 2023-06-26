"use client";

import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Film, fetchFilmList } from "@/redux/features/films";
import { AppStore } from "@/redux/store";
import Sidebar from "@/components/Sidebar/Sidebar";
import TicketList from "@/components/TicketList/TicketList";

type AppDispatch = AppStore["dispatch"];

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const filmList = useSelector((state: any) => state.film.filmList);

  useEffect(() => {
    dispatch(fetchFilmList("api/movies"));
  }, []);

  return (
    <main className={styles.main}>
      <Sidebar />

      <p>API status {filmList.status}</p>

      {filmList.status !== "loading" && filmList.data.length && (
        <TicketList mainPage filmList={filmList.data} />
      )}
    </main>
  );
}
