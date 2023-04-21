import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export type ITemplesSelectStateModel = {
  phayao: boolean;
  prachinburi: boolean;
  ayutthaya: boolean;
  pattani: boolean;
};

export type ITemplesResultsModel = {
  filter(arg0: (item: any) => boolean): unknown;
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

//old code
// export type ISearchBarProps = {
//   searchText: string;
//   setSearchText: React.Dispatch<React.SetStateAction<string>>;
//   onSearch: (searchText: string) => void;
// };

export type ISearchEieiProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  onSearch: (searchQuery: string) => void;
};
