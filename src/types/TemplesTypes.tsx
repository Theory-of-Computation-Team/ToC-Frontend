import { Dispatch, SetStateAction } from "react";

export type ITemplesMapSelected = {
  phayao: boolean;
  prachinburi: boolean;
  ayutthaya: boolean;
  pattani: boolean;
};

export type ITemplesMapProps = {
  selected: ITemplesMapSelected;
  setSelected: Dispatch<SetStateAction<ITemplesMapSelected>>;
};
