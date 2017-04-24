import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <Link to="/" activeClassName="active">Companies</Link> 
    </nav>  
  );
} ;


export default Header;

