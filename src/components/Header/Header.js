import React from 'react';
import './Header.scss';
import Logo from '../Logo/Logo';
import SearchPanel from '../SearchPanel/SearchPanel';

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'wrapper'}>
        <Logo className={'header__logo'} />
        <SearchPanel />
      </div>
    </header>
  );
};

export default Header;
