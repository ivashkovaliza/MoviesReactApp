import React from "react";
import './SearchPanel.scss';
import SearchPanel from "./SearchPanel";

const SearchPanelContainer = () => {
  const handleKeyDown = (event) => {
    const searchButton = document.querySelector('.search__btn');

    if (event.key === 'Enter') {
      searchButton.click();
    }
  };

  return <SearchPanel handleKeyDown={handleKeyDown}/>;
};

export default SearchPanelContainer;
