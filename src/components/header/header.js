import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className={'header'}>
      <h1 className={'logo'}><b>netflix</b>roulette</h1>
      <h2 className={'h2'}>Find your film</h2>
      <form action="" method="get">
        <input  className={'search-field'} name="s" placeholder="Search" type="search"/>
        <button className={'search-btn'} type="submit">Search</button>
      </form>
      <div className={'sort'}>
        <p className={'sort-title'}>Search by</p>
        <button className={'sort-btn sort-btn--active sort-btn--left'}>Title</button>
        <button className={'sort-btn sort-btn--right'}>Genre</button>
      </div>
    </header>
  );
};

export default Header;