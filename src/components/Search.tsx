import React, { FC } from "react";

export interface ISearchProps {}

const Search: FC<ISearchProps> = () => {
  return (
    <div className="p-0">
      {/* <img className="search-img" src="/img/search.png" alt="search" /> */}
      <input type="text" placeholder="Знайти похавати, забігаловку, напій" className="search" />
    </div>
  );
};

export default Search;
