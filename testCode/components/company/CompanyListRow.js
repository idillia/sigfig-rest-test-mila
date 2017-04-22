import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CompanyListRow = ({company}) => {
  return (
    <div className = "card">
      <div className = "card-header card-title">
        <Link to={'/company/' + company._id}>{company.name}</Link>  </div>
      <div className = "card-block">
        <span>Address</span>
        <p className = "card-text">{company.address}</p>
        <span>Revenue</span>
        <p className = "card-text">{company.revenue}</p>
        <span>Phone</span>
        <p className = "card-text">{company.phone}</p>
      </div>
      <div className = "card-footer text-muted">
        See who works there
      </div>
    </div>
  );
}; 


CompanyListRow.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyListRow;

