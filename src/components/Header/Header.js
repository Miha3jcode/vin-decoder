import './Header.scss';
import 'assets/scss/fonts.scss';

import React from 'react';

import {
  Link,
} from 'react-router-dom';

function Header({className, ...props}) {
  return (
    <header
      {...props}
      className={[
        'header',
        className,
      ].join(' ')}
    >
      <Link to={'/'}><p className={'title'}>Vin Decoder</p></Link>
      <div>
        <nav>
          <ul className={'header__links'}>
            <li className={'header__link'}><Link to={'/'}><p className={'text'}>home</p></Link></li>
            <li className={'header__link'}><Link to={'/variables'}><p className={'text'}>variables</p></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;