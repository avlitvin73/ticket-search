"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from "./store";

interface FilmProviderProps {
  children: ReactNode;
}

export default function FilmProvider({ children }: FilmProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}