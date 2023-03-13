import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.PureComponent {
  render() {
    return (
      <>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/sfdsf'}>ErrorPage</Link>
      </>
    );
  }
}

export default Header;
