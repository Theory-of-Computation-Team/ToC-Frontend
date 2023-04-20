import { Dispatch, SetStateAction } from "react";

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

export type ITemplesMapProps = {
  selected: ITemplesSelectStateModel;
  setSelected: Dispatch<SetStateAction<ITemplesSelectStateModel>>;
};

export type ITemplesResultsProps = {
  selected: ITemplesSelectStateModel;
  setSelected: Dispatch<SetStateAction<ITemplesSelectStateModel>>;
  results: ITemplesResultsModel;
};
