import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import SearchButton from "../SearchButton/SearchButton";
import MoviePanel from '../MoviePanel/MoviePanel';
import SearchPanel from '../SearchPanel/SearchPanel';
import './Header.scss';

const Header = (props) => {
  const selectedMovieData = props.selectedMovieData;

  return (
    <header className={'header'}>
      <div className={'wrapper'}>
        <div className={'header__top'}>
          <Logo className={'header__logo'} />
          {selectedMovieData && <SearchButton removeSelectedMovie={props.removeSelectedMovie}/>}
        </div>
        <div className={'header__content'}>
        {selectedMovieData ? (
          <MoviePanel selectedMovieData={props.selectedMovieData} />
        ) : (
          <SearchPanel onSearch={props.onSearch}/>
        )}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
  selectedMovieData: PropTypes.object,
  removeSelectedMovie: PropTypes.func,
};

export default Header;
