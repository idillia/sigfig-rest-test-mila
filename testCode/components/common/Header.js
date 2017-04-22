import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/companies" activeClassName="active">Companies</Link> 
      {" | "}
      <Link to="companies/58fa7087413f4c0aa21e4f33/people" activeClassName="active">People</Link>
    </nav>  
  );
} ;


export default Header;

