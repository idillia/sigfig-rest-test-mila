import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as companyActions from '../../actions/companyActions';
import CompanyList from './CompanyList';
import {browserHistory} from 'react-router';

class CompaniesPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddCompanyPage = this.redirectToAddCompanyPage.bind(this);
  }

  redirectToAddCompanyPage() {
    browserHistory.push('/edit/company');
  }

  render() {
    const {companies} = this.props;
    return (
      <div className = "card">
        <h2 className ="card-header">Companies</h2> 
        <button className="btn btn-info btn-block" type="submit" onClick={this.redirectToAddCompanyPage}>Add Company</button>
        <div className="card-block">
          <CompanyList companies={companies} />
        </div>
      </div>  
    );
  }
}

CompaniesPage.propTypes = {
  companies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    companies: state.companies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(companyActions, dispatch)
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);