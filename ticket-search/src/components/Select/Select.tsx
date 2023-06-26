import { Cinema } from "@/redux/features/films copy";
import { ChangeEvent, FC, useState } from "react";
import styles from "./Select.module.css";

interface ISelect {
  label: string;
  defaultOption: string;
  genreOptions?: string[][];
  cinemaOptions?: Cinema[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<ISelect> = ({
  label,
  defaultOption,
  genreOptions,
  cinemaOptions,
  onChange,
}) => {
  return (
    <>
      <label className={styles.label}>{label}</label>

      <select
        className={styles.filter}
        onChange={(e) => {
          onChange(e);
        }}
      >
        <optgroup className={styles.optgroup}>
          <option className={styles.option}>{defaultOption}</option>
        </optgroup>
        {genreOptions?.length &&
          genreOptions.map((opt) => (
            <optgroup key={opt[0]} className={styles.optgroup}>
              <option className={styles.option} value={opt[0]}>
                {opt[1]}
              </option>
            </optgroup>
          ))}
        {cinemaOptions?.length &&
          cinemaOptions.map((opt) => (
            <optgroup key={opt.id} className={styles.optgroup}>
              <option
                className={styles.option}
                value={JSON.stringify(opt.movieIds)}
              >
                {opt.name}
              </option>
            </optgroup>
          ))}
      </select>
    </>
  );
};

export default Select;
