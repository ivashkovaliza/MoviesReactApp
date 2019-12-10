import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import SearchPanel from '../SearchPanel/SearchPanel';
import MoviePanel from '../MoviePanel/MoviePanel'
import PropTypes from 'prop-types';

const Header = (props) => {
  const isSelectedFilm = props.isSelectedFilm;

  return (
    <header className={'header'}>
      <div className={'wrapper'}>
        <Logo className={'header__logo'} />
        <div className={'header__content'}>
        {isSelectedFilm ? (
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
  isSelectedFilm: PropTypes.bool,
  selectedMovieData: PropTypes.object,
};

export default Header;
