import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export type IResultsSelectionModel = {
  phayao: boolean;
  prachinburi: boolean;
  ayutthaya: boolean;
  pattani: boolean;
};

export type IResultsModel = {
  phayao: string[];
  prachinburi: string[];
  ayutthaya: string[];
  pattani: string[];
};

export type IMapProps = {
  selected: IResultsSelectionModel;
  setSelected: Dispatch<SetStateAction<IResultsSelectionModel>>;
};

export type ITemplesResultsProps = {
  selected: IResultsSelectionModel;
  setSelected: Dispatch<SetStateAction<IResultsSelectionModel>>;
  results: IResultsModel;
  searchQuery: string;
};

export type IPathProps = {
  id: string;
  label: string;
  onclick: MouseEventHandler<SVGGElement>;
  selected: IResultsSelectionModel;
  draw: string;
};

export type ITemplesCheckboxProps = {
  selected: IResultsSelectionModel;
  setSelected: Dispatch<SetStateAction<IResultsSelectionModel>>;
  id: string;
  label: string;
};

export type ITempleListProps = {
  selected: IResultsSelectionModel;
  id: string;
  label: string;
  temples: string[];
  count: number;
};

export type ITempleSearchProps = {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};
