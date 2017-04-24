import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PersonListRow = ({person}) => {
  return (
    <div className = "card">
      <div className = "card-header card-title">
        <Link to={'/person/' + person._id}><h3>{person.name}</h3></Link>
        <Link to={'/edit/person/' + person._id}>Edit</Link></div>

      <div className = "card-block">
        <span>Name</span>
        <p className = "card-text">{person.name}</p>
        <span>Email</span>
        <p className = "card-text">{person.email}</p>
      </div>
      <div className = "card-footer text-muted">
      </div>
    </div>
  );
}; 


PersonListRow.propTypes = {
  person: PropTypes.object.isRequired
};

export default PersonListRow;

