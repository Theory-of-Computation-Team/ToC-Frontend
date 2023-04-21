import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export type ITemplesSelectStateModel = {
  phayao: boolean;
  prachinburi: boolean;
  ayutthaya: boolean;
  pattani: boolean;
};

export type ITemplesResultsModel = {
  phayao: string[];
  prachinburi: string[];
  ayutthaya: string[];
  pattani: string[];
};

export type ITemplesSelectStateProps = {
  selected: ITemplesSelectStateModel;
  setSelected: Dispatch<SetStateAction<ITemplesSelectStateModel>>;
};

export type ITemplesResultsProps = {
  selected: ITemplesSelectStateModel;
  setSelected: Dispatch<SetStateAction<ITemplesSelectStateModel>>;
  results: ITemplesResultsModel;
};

export type IPathProps = {
  id: string;
  label: string;
  onclick: MouseEventHandler<SVGGElement>;
  selected: ITemplesSelectStateModel;
  draw: string;
};

export type ITemplesCheckboxProps = {
  selected: ITemplesSelectStateModel;
  setSelected: Dispatch<SetStateAction<ITemplesSelectStateModel>>;
  id: string;
  label: string;
};

export type ITempleListProps = {
  selected: ITemplesSelectStateModel;
  id: string;
  label: string;
  temples: string[];
  count: number;
};