import React from "react";
import {Link, Route} from "react-router-dom";
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import Banner from './banner.jpg';
import NavBar from './NavBar.js';
import HeaderLink from './HeaderLink';
import messages from './messages';


const Header = function Header(){
  return (
    <div>
        <A href="http://diendandung.online">
          <Img src={Banner} alt="Logo"/>
        </A>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
          <HeaderLink to="/products">
            <FormattedMessage {...messages.products} />
          </HeaderLink>
          <HeaderLink to="/orders">
            <FormattedMessage {...messages.orders} />
          </HeaderLink>
        </NavBar>
    </div>
  );
}

export default Header;
