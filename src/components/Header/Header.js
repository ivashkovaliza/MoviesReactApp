import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../Logo/Logo';
import SearchButton from "../SearchButton/SearchButton";
import MoviePanel from '../MoviePanel/MoviePanel';
import './Header.scss';
import { Link } from "react-router-dom";
import SearchPanelContainer from '../SearchPanel/SearchPanelContainer';

const Header = (props) => {
  const selectedMovieData = props.selectedMovieData;

  return (
    <header className={'header'}>
      <div className={'wrapper'}>
        <div className={'header__top'}>
          <Logo className={'header__logo'} />
          {props.children}
          {/*{console.log(props.match)}*/}
          {/*{selectedMovieData &&*/}
          {/*// <Link to={'/'}>*/}
          {/*  <SearchButton removeSelectedMovie={props.removeSelectedMovie}/>*/}
          {/*// </Link>*/}
          {/*}*/}
        </div>
        <div className={'header__content'}>
          {props.headerContent}
        {/*{selectedMovieData ? (*/}
        {/*  <MoviePanel selectedMovieData={props.selectedMovieData} />*/}
        {/*) : (*/}
        {/*  <SearchPanelContainer onSearch={props.onSearch}/>*/}
        {/*)}*/}
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func,
  selectedMovieData: PropTypes.object,
  removeSelectedMovie: PropTypes.func,
  headerContent: PropTypes.object,
  children: PropTypes.object
};

export default Header;