import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";
import styles from "./Sidebar.module.css";
import Input from "../Input/Input";
import Select from "../Select/Select";
import { Cinema } from "@/redux/features/films copy";

interface ISidebar {
  genres: string[][];
  cinemas: Cinema[];
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeGenre: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeCinema: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Sidebar: FC<ISidebar> = ({
  onChangeTitle,
  onChangeGenre,
  genres,
  onChangeCinema,
  cinemas,
}) => {
  return (
    <aside className={styles.aside}>
      <h3 className={styles.title}>Фильтр поиска</h3>
      <fieldset className={styles.inputGroup}>
        <Input
          label="Название"
          onChange={(e) => {
            onChangeTitle(e);
          }}
        />
        <Select
          label="Жанр"
          defaultOption="Выберите жанр"
          genreOptions={genres}
          onChange={(e) => {
            onChangeGenre(e);
          }}
        />
        <Select
          label="Кинотеатр"
          defaultOption="Выберите кинотеатр"
          cinemaOptions={cinemas}
          onChange={(e) => {
            onChangeCinema(e);
          }}
        />
      </fieldset>
    </aside>
  );
};

export default Sidebar;
