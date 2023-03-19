import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Link to="/sfdsf">ErrorPage</Link>
      </div>
    );
  }
}

export default Header;
