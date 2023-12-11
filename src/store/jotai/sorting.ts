import { atom } from "jotai";

export enum SortOrder {
  Newest,
  Oldest
}

export const todoSortingAtom = atom(SortOrder.Newest);

