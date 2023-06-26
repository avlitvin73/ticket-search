"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Film, fetchFilmList } from "@/redux/features/films";
import { AppStore } from "@/redux/store";
import TicketCard from "@/components/TicketCard/TicketCard";

type AppDispatch = AppStore["dispatch"]

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const filmList = useSelector((state: any) => state.film.filmList);

  useEffect(()=>{
    dispatch( fetchFilmList("api/movies"));
  },[])
  return (
    <Sidebar />
      <main className={styles.main}>
        <p>API status {filmList.status}</p>
        <div>
          {filmList.status !== "loading" &&
            filmList.data.length &&
            filmList.data.map((film: Film) => (
              <TicketCard key={film.id} film={film}/>
            ))}
        </div>
      </main>
  );
}
