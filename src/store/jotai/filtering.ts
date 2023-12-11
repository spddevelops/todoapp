import { atom } from "jotai";

export enum Filters {
  All,
  Active,
  Completed
}

export const todoFilteringAtom = atom(Filters.All);

