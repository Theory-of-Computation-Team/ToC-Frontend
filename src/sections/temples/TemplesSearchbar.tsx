import React, { useState } from "react";
import { ITemplesResultsProps } from "@/types/TemplesTypes";
import { SearchEiei } from "./TemplesResults";

const TemplesSearchbar = ({
  selected,
  setSelected,
  results,
}: ITemplesResultsProps) => {
  function isStringArray(value: any): value is string[] {
    return (
      Array.isArray(value) && value.every((item) => typeof item === "string")
    );
  }
  const [searchQuery, setSearchQuery] = useState<string>("");

  function handleSearch(searchText: string) {
    setSearchQuery(searchText);
  }

  const filteredResults = Object.fromEntries(
    Object.entries(results).map(([key, value]) => [
      key,
      isStringArray(value)
        ? value.filter((temple) =>
            temple.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : value,
    ])
  );

  return (
    <div className="flex">
      <SearchEiei
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
    </div>
  );
};

export default TemplesSearchbar;
