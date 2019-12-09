import React from "react";
import './SearchPanel.scss';
import Toggle from "../Toggle/Toggle";

const SearchPanel = () => {
  return (
    <>
      <h2 className={'h2'}>Find your film</h2>
        <form action="" method="get">
          <input  className={'search-field'} name="s" placeholder="Search" type="search"/>
          <button className={'search-btn'} type="submit">Search</button>
        </form>
      <Toggle title={'Search by'} toggleValues={['title', 'genre']}/>
    </>
  );
};

export default SearchPanel;
