import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as companyActions from '../../actions/companyActions';
import toastr from 'toastr';
import {Link} from 'react-router';

export class CompanyPage extends React.Component {
  componentDidlMount() {
    console.log("cdm")
    // this.props.dispatch(loadOneCompany(this.props.params.id))
  }
 
  render() {
    const company = this.props.company;
    return (
    <div className = "card">
      <div className = "card-header card-title">
        <h3>{company.name}</h3>
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
  }
}

function getCompanyById(companies, id) {

  const company = companies.filter(company => company._id == id);
  if(company) return company[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  console.log(state)
  const companyId = ownProps.params.id;
  let company = {address: '', name: '', phone: '', revenue: '', _id: ''};

  if(companyId && state.companies.length > 0) {
    company = getCompanyById(state.companies, companyId);
  }

  return {
    company: company
  };
}

export default connect(mapStateToProps)(CompanyPage);