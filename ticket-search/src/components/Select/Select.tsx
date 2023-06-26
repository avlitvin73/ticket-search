import { Cinema } from "@/redux/features/films copy";
import { ChangeEvent, FC, useState } from "react";

interface ISelect {
  label: string;
  defaultOption: string;
  genreOptions?: string[][];
  cinemaOptions?: Cinema[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<ISelect> = ({
  label,
  genreOptions,
  cinemaOptions,
  onChange,
}) => {
  return (
    <select
      onChange={(e) => {
        onChange(e);
      }}
    >
      <option>{label}</option>
      {genreOptions?.length &&
        genreOptions.map((opt) => (
          <option key={opt[0]} value={opt[0]}>
            {opt[1]}
          </option>
        ))}
      {cinemaOptions?.length &&
        cinemaOptions.map((opt) => (
          <option key={opt.id} value={JSON.stringify(opt.movieIds)}>
            {opt.name}
          </option>
        ))}
    </select>
  );
};

export default Select;
