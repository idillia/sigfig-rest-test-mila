import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import CompanyPage from './CompanyPage';

const CompanyListRow = ({company}) => {
  return (
    <div className = "card">
      <div className = "card-header card-title">
        <Link to={'/company/' + company._id}><h3>{company.name}</h3></Link>
        <Link to={'/edit/company/' + company._id}>Edit</Link>
      </div>
      <div className = "card-block">
        <span>Address</span>
        <p className = "card-text">{company.address}</p>
        <span>Revenue</span>
        <p className = "card-text">{company.revenue}</p>
        <span>Phone</span>
        <p className = "card-text">{company.phone}</p>
      </div>
      <div className = "card-footer text-muted">
      <Link to={'/companies/' + company._id + '/people'}>See who works there</Link>
      </div>
    </div>
  );
}; 


CompanyListRow.propTypes = {
  company: PropTypes.object.isRequired
};

export default CompanyListRow;

