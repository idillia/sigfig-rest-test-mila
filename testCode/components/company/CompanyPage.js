import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CompanyListRow from './CompanyListRow';


export class CompanyPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
 
  render() {
    const {company} = this.props;
    return (
      <div>
        <CompanyListRow company = {company}/>
      </div>
    );
  }
}

CompanyPage.propTypes = {
  company: PropTypes.object.isRequired
};


function getCompanyById(companies, id) {
  const company = companies.filter(company => company._id == id);
  if(company) return company[0];
  return null;
}

function mapStateToProps(state, ownProps) {
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
